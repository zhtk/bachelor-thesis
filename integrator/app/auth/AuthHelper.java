package auth;

import com.google.inject.Inject;

import auth.Auth.*;
import auth.AuthServiceGrpc.*;
import io.grpc.*;

public class AuthHelper {
    // TODO pobieranie z środowiska
    private static int AUTH_PORT = 50051;
    private static String AUTH_HOST = "localhost";
    
    private AuthServiceBlockingStub stub;
    private MaskChecker checker;

    @Inject
    AuthHelper(MaskChecker checker) {
        ManagedChannelBuilder<?> builder =
            ManagedChannelBuilder.forAddress(getAuthHostAdress(), getAuthHostPort())
            .usePlaintext(true);
        ManagedChannel channel = builder.build();
        stub = AuthServiceGrpc.newBlockingStub(channel);
        this.checker = checker;
    }
    
    private String getAuthHostAdress() {
        return AUTH_HOST;
    } 
    
    private int getAuthHostPort() {
        return AUTH_PORT;
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
