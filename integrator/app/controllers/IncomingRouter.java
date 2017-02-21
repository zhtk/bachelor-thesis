package controllers;

import javax.inject.Inject;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;
import managers.*;

public class IncomingRouter extends Controller {
	@Inject private EndpointsManager manager;
	
	public Result view(String endpoint) {
		String type = EndpointsManager.TYPE_VIEW;
        Endpoint ep = manager.findEndpoint(type, endpoint);
        
        if (ep != null)
        	return ep.getResult(new String[]{}, new String[]{});
        else
        	return Results.notFound();
    }
    
    public Result read(String endpoint, String stream) {
        return Results.ok("OK"); // TODO
    }
    
    public Result write(String endpoint) {
        return Results.ok("OK"); // TODO
    }
}
