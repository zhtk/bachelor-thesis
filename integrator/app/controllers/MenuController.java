package controllers;

import javax.inject.Inject;
import com.fasterxml.jackson.databind.node.*;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;
import managers.CuratorHelper;

public class MenuController extends Controller {
    private CuratorHelper helper;
    private final String START_ENDPOINT = "/start";
    
    @Inject
    public MenuController(CuratorHelper helper) {
        this.helper = helper;
    }
    
    private void buildMenu(ArrayNode node, String path) {
        
    }
    
    private String getStartingEndpoint() {
        return helper.getNodeContent(START_ENDPOINT);
    }
    
    public Result index() {
        ObjectNode result = Json.newObject();
        
        // Końcówka startowa
        result.put("start", getStartingEndpoint());
        
        // Menu
        ArrayNode menu = result.putArray("menu");
        buildMenu(menu, "/");
        
        return Results.ok(result);
    }
}
