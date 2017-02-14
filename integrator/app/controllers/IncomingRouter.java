package controllers;

import javax.inject.Inject;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

public class IncomingRouter extends Controller {
	@Inject
    public IncomingRouter() {
		
	}
	
	public Result view(String endpoint) {
        return Results.ok("OK");
    }
    
    public Result read(String endpoint, String stream) {
        return Results.ok("OK");
    }
    
    public Result write(String endpoint) {
        return Results.ok("OK");
    }
}
