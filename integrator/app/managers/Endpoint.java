package managers;

import play.mvc.Result;

public interface Endpoint {
    Result getResult(String[] paramsKeys, String[] paramsValues);
}
