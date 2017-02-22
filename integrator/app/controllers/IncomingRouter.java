package controllers;

import javax.inject.Inject;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;
import managers.*;

public class IncomingRouter extends Controller {
    private ViewEndpointManager viewManager;
    private ReadEndpointManager readManager;
    
    @Inject
    IncomingRouter(ViewEndpointManager viewManager,
                   ReadEndpointManager readManager) {
        this.viewManager = viewManager;
        this.readManager = readManager;
    }
        
    public Result view(String endpoint) {
        ViewEndpoint ep = viewManager.getEndpoint(endpoint);
        
        if (ep != null)
            return ep.getResult();
        else
            return Results.notFound();
    }

    public Result read(String endpoint) {
        ReadEndpoint ep = readManager.getEndpoint(endpoint);
        
        ArgumentParser arguments = new ArgumentParser(request());
        
        if (ep != null)
            return ep.getResult(arguments.getKeys(), arguments.getValues());
        else
            return Results.notFound();
    }

    public Result write(String endpoint) {
        return Results.notFound(); // TODO
    }
}
