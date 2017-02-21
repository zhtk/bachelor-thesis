package managers;

public interface ReadEndpointFactory {
    public ReadEndpoint create(String zkPath);
}
