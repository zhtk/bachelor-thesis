package managers;

import java.util.concurrent.CompletionStage;
import javax.inject.Inject;
import com.google.inject.assistedinject.Assisted;
import akka.stream.javadsl.Source;
import akka.util.ByteString;
import play.libs.ws.*;
import play.mvc.*;

public class WriteEndpoint {    
    protected final int REQUEST_TIMEOUT = 1000;
    
    protected String zkPath;
    protected WSClient ws;
    
    @Inject
    WriteEndpoint(WSClient ws, @Assisted String zkPath) {
        this.zkPath = zkPath;
        this.ws = ws;
    }
   
    private String getUrl() {
        // TODO
        // integracja z zookeeperem
        return "http://example.com";
    }
    
    public boolean isValid() {
        return true; // TODO zk check
    }
    
    public Result getResult(String[] paramsKeys, String[] paramsValues,
                            String requestBody) {
        String url = getUrl();
        WSRequest request = ws.url(url).setRequestTimeout(REQUEST_TIMEOUT)
                              .setBody(requestBody);
        
        for (int i = 0; i < paramsKeys.length; ++i)
            request = request.setQueryParameter(paramsKeys[i], paramsValues[i]);
        
        CompletionStage<StreamedResponse> stream = request.setMethod("POST").stream();
        
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

