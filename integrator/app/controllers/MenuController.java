package controllers;

import java.util.*;
import javax.inject.Inject;
import org.apache.curator.framework.recipes.cache.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import play.libs.Json;
import play.mvc.*;
import auth.AuthHelper;
import managers.CuratorHelper;

public class MenuController extends Controller {
    private final String START_ENDPOINT = "/start";
    private final String MENU_PATH = "/menu";
    
    private CuratorHelper helper;
    private TreeCache tree;
    private AuthHelper auth;
    
    @Inject
    public MenuController(CuratorHelper helper, AuthHelper auth)
            throws Exception {
        this.helper = helper;
        this.tree = new TreeCache(helper.getClient(), MENU_PATH);
        this.tree.start();
        this.auth = auth;
    }
    
    private void appendValue(JsonNode from, ObjectNode to, String field) {
        List<String> list = from.findValuesAsText(field);
        
        if (list.isEmpty())
            to.put(field, "");
        else
            to.put(field, list.get(0));
    }
    
    private boolean checkPermissions(String mask) {
        String[] tokens = request().queryString().get("token");
        String token;
        
        if (tokens != null && tokens.length > 0)
            token = tokens[0];
        else
            token = "";
        
        String svc = auth.getPermissions(token);
        
        if (mask == null)
            mask = "";
        
        return auth.checkMasks(svc, mask);
    }
    
    private void buildMenu(ArrayNode node, String path) {
        Map<String, ChildData> items = tree.getCurrentChildren(path);
        
        if (items == null)
            return;
        
        for (Map.Entry<String, ChildData> entry : items.entrySet()) {
            byte[] data = entry.getValue().getData();
            JsonNode json = Json.parse(data);
            ObjectNode child = Json.newObject();
            
            // Dopisanie zwykłych parametrów
            appendValue(json, child, "nr");
            appendValue(json, child, "name");
            appendValue(json, child, "icon");
            appendValue(json, child, "link");
            
            // Dopisanie elementów dzieci
            ArrayNode menu = child.putArray("menu");
            String childPath = entry.getValue().getPath();
            buildMenu(menu, childPath);
            
            // Sprawdzenie uprawnień
            String mask;
            
            if (!json.findValuesAsText("mask").isEmpty())
                mask = json.findValuesAsText("mask").get(0);
            else
                mask = null;
            
            if (checkPermissions(mask))
                node.add(child);
        }
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
        buildMenu(menu, "/menu");
        
        response().setHeader("Access-Control-Allow-Origin", "*");
        return Results.ok(result);
    }
}
