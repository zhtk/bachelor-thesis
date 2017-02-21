package managers;

import com.google.inject.Inject;

public class ViewEndpointManager {
    protected ViewEndpointFactory viewFactory;
    
    @Inject
    ViewEndpointManager(ViewEndpointFactory viewFactory) {
        this.viewFactory = viewFactory;
    }
    
    public ViewEndpoint getEndpoint(String name) {
        ViewEndpoint ep = viewFactory.create(name);
        
        // TODO cache czy coś w tym rodzaju
        
        if (ep.isValid())
            return ep;
        else 
            return null;
    }
}
