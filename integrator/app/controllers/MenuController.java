package controllers;

import javax.inject.Inject;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

public class MenuController extends Controller {
    @Inject
    public MenuController() {

    }

    public Result index() {
        return Results.ok("OK");
    }
}
