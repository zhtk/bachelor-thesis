package managers;

import javax.inject.Inject;
import com.google.inject.assistedinject.Assisted;
import play.api.libs.ws.WSClient;
import play.mvc.Result;
import play.mvc.Results;

public class ViewEndpoint {
    protected String name;

    @Inject
    ViewEndpoint(@Assisted String name) {
        this.name = name;
    }

    public boolean isValid() {
        return true; // TODO zk check
    }
    
    public Result getResult() {
        // TODO
        // integracja z zookeeperem
        return Results.ok("EP " + name);
    }
}
