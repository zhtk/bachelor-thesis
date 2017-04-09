package auth;

import com.google.inject.Inject;
import auth.Auth.*;
import auth.AuthServiceGrpc.*;
import io.grpc.*;
import play.Configuration;

@SuppressWarnings("deprecation")
public class AuthHelper {    
    private AuthServiceBlockingStub stub;
    private MaskChecker checker;
    private Configuration conf;

    @Inject
    AuthHelper(Configuration conf, MaskChecker checker) {
        this.conf = conf;
        ManagedChannelBuilder<?> builder =
            ManagedChannelBuilder.forAddress(getAuthHostAdress(), getAuthHostPort())
            .usePlaintext(true);
        ManagedChannel channel = builder.build();
        stub = AuthServiceGrpc.newBlockingStub(channel);
        this.checker = checker;
    }
    
    private String getAuthHostAdress() {
        return conf.getString("auth.host");
    } 
    
    private int getAuthHostPort() {
        return conf.getInt("auth.port");
    }
    
    public String getToken(String login, String password) {
        LoginData data = LoginData.newBuilder().setLogin(login)
                         .setPassword(password).build();
        LoginResponse response;
        
        try {
            response = stub.getToken(data);
            
            if (response.getStatus() == LoginResponse.Status.OK)
                return response.getToken();
            else
                return null;
        } catch(Exception e) {
            return null;
        }
    }
    
    public void invalidateToken(String token) {
        Token request = Token.newBuilder().setToken(token).build();
        
        try {
            stub.invalidateToken(request);
        } catch(Exception e) {
        }
    }
    
    public String getPermissions(String token) {
        Token request = Token.newBuilder().setToken(token).build();
        
        try {
            return stub.getPermissions(request).getMask();
        } catch(Exception e) {
            return "";
        }
    }
    
    public String getUserId(String token) {
        Token request = Token.newBuilder().setToken(token).build();
        
        try {
            UserId uid = stub.getUserId(request);
            
            if (uid.getStatus() == UserId.Status.OK)
                return uid.getUid();
            else
                return null;
        } catch(Exception e) {
            return null;
        }
    }
    
    public boolean checkMasks(String obtained, String required) {
        return checker.checkMasks(obtained, required);
    }
}
