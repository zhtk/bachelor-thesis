package managers;

import javax.inject.*;
import java.nio.charset.StandardCharsets;
import org.apache.curator.*;
import org.apache.curator.framework.*;
import org.apache.curator.retry.*;
import org.apache.curator.x.discovery.*;
import play.Configuration;

@SuppressWarnings("deprecation")
@Singleton
public class CuratorHelper {
    protected final int RETRY_TIME = 500;
    protected CuratorFramework client;
    protected Configuration conf;
    
    
    @Inject
    CuratorHelper(Configuration conf) {
        this.conf = conf;
        RetryPolicy retryPolicy = new RetryOneTime(RETRY_TIME);
        String connectString = getConnectionString();
        client = CuratorFrameworkFactory.builder()
                 .connectString(connectString).retryPolicy(retryPolicy)
                 .build();
        
        client.start();
    }
    
    private String getConnectionString() {
        return conf.getString("zkserver.host");
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
