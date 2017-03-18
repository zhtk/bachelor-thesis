package managers;

import javax.inject.*;
import java.nio.charset.StandardCharsets;
import org.apache.curator.*;
import org.apache.curator.framework.*;
import org.apache.curator.retry.*;
import org.apache.curator.x.discovery.*;

@Singleton
public class CuratorHelper {
    protected final int RETRY_TIME = 500;
    protected CuratorFramework client;
    
    @Inject
    CuratorHelper() {
        RetryPolicy retryPolicy = new RetryOneTime(RETRY_TIME);
        String connectString = getConnectionString();
        client = CuratorFrameworkFactory.builder()
                 .connectString(connectString).retryPolicy(retryPolicy)
                 .build();
        
        client.start();
    }
    
    private String getConnectionString() {
        // TODO pobieranie z środowiska
        return "127.0.0.1:2181";
    }
    
    public CuratorFramework getClient() {
        return client;
    }
    
    public boolean doesExist(String path) {
        try {
            return client.checkExists().forPath(path) != null;
        } catch(Exception e) {
            return false;
        }
    }
    
    public String getNodeContent(String path) {
        try {
            byte[] data = client.getData().forPath(path);
            return new String(data, StandardCharsets.UTF_8);
        } catch(Exception e) {
            return null;
        }
    }
}
