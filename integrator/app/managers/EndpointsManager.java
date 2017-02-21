package managers;

import java.util.concurrent.ConcurrentHashMap;
import javax.inject.*;

@Singleton
public class EndpointsManager {
	public static final String TYPE_VIEW = "view";
	
	protected ConcurrentHashMap<String, Endpoint> map;
	protected ViewEndpointFactory viewFactory;
	
	@Inject
	EndpointsManager(ViewEndpointFactory viewFactory) {
		this.map = new ConcurrentHashMap<String, Endpoint>();
		this.viewFactory = viewFactory;
	}
	
	private Endpoint createEndpoint(String type, String name) {
		if (type == EndpointsManager.TYPE_VIEW)
			return this.viewFactory.create(name);
		else
			return null; // TODO
	}
	
	public Endpoint findEndpoint(String type, String name) {
		String key = type + "/" + name;
		Endpoint endpoint = map.get(key);
		
		if (endpoint == null) {
			endpoint = createEndpoint(type, name);
		
			if (endpoint != null)
				this.map.put(key, endpoint);
		}
		
		return endpoint;
	}
}
