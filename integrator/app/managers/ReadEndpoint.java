package managers;

import java.util.concurrent.CompletionStage;
import javax.inject.Inject;
import org.apache.curator.x.discovery.*;
import com.google.inject.assistedinject.Assisted;
import akka.stream.javadsl.Source;
import akka.util.ByteString;
import play.libs.ws.*;
import play.mvc.Result;
import play.mvc.Results;
import play.Logger;

public class ReadEndpoint {    
    protected final int REQUEST_TIMEOUT = 1000;
    protected final String READ_PREFIX = "/read/";
    
    protected String zkPath;
    protected WSClient ws;
    protected CuratorHelper curator;
    protected ServiceProvider<EndpointService> instances;
    
    @Inject
    ReadEndpoint(WSClient ws, CuratorHelper curator, @Assisted String zkPath)
            throws Exception {
        this.zkPath = zkPath;
        this.ws = ws;
        this.curator = curator;
        
        ServiceDiscovery<EndpointService> discovery =
                ServiceDiscoveryBuilder.builder(EndpointService.class)
                .basePath(READ_PREFIX).client(curator.getClient()).build();
        discovery.start();
        
        this.instances = discovery.serviceProviderBuilder().serviceName(zkPath).build();
        this.instances.start();
    }
   
    private String getUrl() {
        try {
            Logger.debug("ReadEndpoint.getUrl();");
            
            ServiceInstance<EndpointService> service = instances.getInstance();
            String address = service.getAddress();
            
            if (service.getPort() != null)
                address = address + ":" + service.getPort();
            
            Logger.debug("ReadEndpoint.getUrl() = " + address);
            
            return address;
        } catch(Exception e) {
            Logger.debug("ReadEndpoint.getUrl() = Exception");
            return null;
        }
    }
    
    public boolean isValid() {
        return curator.doesExist(READ_PREFIX + zkPath);
    }
    
    public Result getResult(String[] paramsKeys, String[] paramsValues) {
        String url = getUrl();
        
        if (url == null)
            return Results.notFound();
        
        WSRequest request = ws.url(url).setRequestTimeout(REQUEST_TIMEOUT);
        
        for (int i = 0; i < paramsKeys.length; ++i)
            request = request.setQueryParameter(paramsKeys[i], paramsValues[i]);
        
        CompletionStage<StreamedResponse> stream = request.setMethod("GET").stream();
        
        CompletionStage<Result> result = stream.thenApply(response -> {
            WSResponseHeaders responseHeaders = response.getHeaders();
            Source<ByteString, ?> body = response.getBody();

            if (responseHeaders.getStatus() == 200)
                return Results.ok().chunked(body);
            else
                return Results.notFound();
        });
        
        try {
            return result.toCompletableFuture().get();
        } catch (Exception e) {
            return Results.notFound();
        }
    }
}
