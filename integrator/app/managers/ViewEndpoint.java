package managers;

import javax.inject.Inject;
import com.google.inject.assistedinject.Assisted;
import play.api.libs.ws.WSClient;
import play.mvc.Result;
import play.mvc.Results;

public class ViewEndpoint implements Endpoint {
	protected String name;
	
	@Inject
	public ViewEndpoint(WSClient ws, @Assisted String name) {
		this.name = name;
	}
	
	public Result getResult(String[] paramsKeys, String[] paramsValues) {
		// TODO
		// integracja z zookeeperem
		return Results.ok("EP " + name);
	}
}
