package managers;

import java.util.ArrayList;
import java.util.Set;
import play.mvc.Http.Request;;

public class ArgumentParser {
    protected String[] names;
    protected String[] values;
    
    public ArgumentParser(Request request) {
        Set<String> keys = request.queryString().keySet();
        names = keys.toArray(new String[0]);
        
        ArrayList<String> values = new ArrayList<>();
        for (int i = 0; i < names.length; ++i) {
            String[] params = request.queryString().get(names[i]);
            
            if (params.length > 0)
                values.add(params[0]);
            else
                values.add("");
        }
        
        this.values = values.toArray(new String[0]);
    }
    
    public String[] getKeys() {
        return names.clone();
    }
    
    public String[] getValues() {
        return values.clone();
    }
}
