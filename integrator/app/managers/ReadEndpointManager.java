package managers;

import com.google.inject.Inject;

public class ReadEndpointManager {
    protected ReadEndpointFactory readFactory;
    
    @Inject
    ReadEndpointManager(ReadEndpointFactory readFactory) {
        this.readFactory = readFactory;
    }
    
    public ReadEndpoint getEndpoint(String name) {
        ReadEndpoint ep = readFactory.create(name);
        
        // TODO cache czy coś w tym rodzaju
        
        if (ep.isValid())
            return ep;
        else 
            return null;
    }
}
