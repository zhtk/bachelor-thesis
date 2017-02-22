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
    private WriteEndpointManager writeManager;
    
    @Inject
    IncomingRouter(ViewEndpointManager viewManager,
                   ReadEndpointManager readManager,
                   WriteEndpointManager writeManager) {
        this.viewManager = viewManager;
        this.readManager = readManager;
        this.writeManager = writeManager;
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
        WriteEndpoint ep = writeManager.getEndpoint(endpoint);
        
        ArgumentParser arguments = new ArgumentParser(request());
        String body = request().body().asText();
        
        if (body == null) // TODO: test, czy ten warunek jest kiedyś nieprawdziwy
            body = "";
        
        if (ep != null)
            return ep.getResult(arguments.getKeys(), arguments.getValues(), body);
        else
            return Results.notFound();
    }
}
