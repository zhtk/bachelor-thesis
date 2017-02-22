package managers;

public interface WriteEndpointFactory {
    public WriteEndpoint create(String zkPath);
}
