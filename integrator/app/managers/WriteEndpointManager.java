package managers;

import com.google.inject.Inject;

public class WriteEndpointManager {
    protected WriteEndpointFactory writeFactory;
    
    @Inject
    WriteEndpointManager(WriteEndpointFactory writeFactory) {
        this.writeFactory = writeFactory;
    }
    
    public WriteEndpoint getEndpoint(String name) {
        WriteEndpoint ep = writeFactory.create(name);
        
        // TODO cache czy coś w tym rodzaju
        
        if (ep.isValid())
            return ep;
        else 
            return null;
    }
}