package managers;

import javax.inject.Inject;
import com.google.inject.assistedinject.Assisted;
import play.api.libs.ws.WSClient;
import play.mvc.Result;
import play.mvc.Results;

public class ViewEndpoint {
    protected String name;
    protected CuratorHelper curator;

    @Inject
    ViewEndpoint(CuratorHelper curator, @Assisted String name) {
        this.name = name;
        this.curator = curator;
    }
    
    private String getPath() {
        return "/view/" + name;
    }
    
    public boolean isValid() {
        return curator.doesExist(getPath());
    }
    
    public Result getResult() {
        String result = curator.getNodeContent(getPath());
        
        if (result == null)
            return Results.notFound();
        else
            return Results.ok(result);
    }
}
