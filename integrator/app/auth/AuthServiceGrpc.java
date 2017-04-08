package auth;

import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.2.0)",
    comments = "Source: auth.proto")
public final class AuthServiceGrpc {

  private AuthServiceGrpc() {}

  public static final String SERVICE_NAME = "AuthService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<auth.Auth.LoginData,
      auth.Auth.LoginResponse> METHOD_GET_TOKEN =
      io.grpc.MethodDescriptor.create(
          io.grpc.MethodDescriptor.MethodType.UNARY,
          generateFullMethodName(
              "AuthService", "GetToken"),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.LoginData.getDefaultInstance()),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.LoginResponse.getDefaultInstance()));
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<auth.Auth.Token,
      auth.Auth.Empty> METHOD_INVALIDATE_TOKEN =
      io.grpc.MethodDescriptor.create(
          io.grpc.MethodDescriptor.MethodType.UNARY,
          generateFullMethodName(
              "AuthService", "InvalidateToken"),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.Token.getDefaultInstance()),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.Empty.getDefaultInstance()));
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<auth.Auth.Token,
      auth.Auth.Permissions> METHOD_GET_PERMISSIONS =
      io.grpc.MethodDescriptor.create(
          io.grpc.MethodDescriptor.MethodType.UNARY,
          generateFullMethodName(
              "AuthService", "GetPermissions"),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.Token.getDefaultInstance()),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.Permissions.getDefaultInstance()));
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<auth.Auth.Token,
      auth.Auth.UserId> METHOD_GET_USER_ID =
      io.grpc.MethodDescriptor.create(
          io.grpc.MethodDescriptor.MethodType.UNARY,
          generateFullMethodName(
              "AuthService", "GetUserId"),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.Token.getDefaultInstance()),
          io.grpc.protobuf.ProtoUtils.marshaller(auth.Auth.UserId.getDefaultInstance()));

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AuthServiceStub newStub(io.grpc.Channel channel) {
    return new AuthServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AuthServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new AuthServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary and streaming output calls on the service
   */
  public static AuthServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new AuthServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class AuthServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void getToken(auth.Auth.LoginData request,
        io.grpc.stub.StreamObserver<auth.Auth.LoginResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_GET_TOKEN, responseObserver);
    }

    /**
     */
    public void invalidateToken(auth.Auth.Token request,
        io.grpc.stub.StreamObserver<auth.Auth.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_INVALIDATE_TOKEN, responseObserver);
    }

    /**
     */
    public void getPermissions(auth.Auth.Token request,
        io.grpc.stub.StreamObserver<auth.Auth.Permissions> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_GET_PERMISSIONS, responseObserver);
    }

    /**
     */
    public void getUserId(auth.Auth.Token request,
        io.grpc.stub.StreamObserver<auth.Auth.UserId> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_GET_USER_ID, responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            METHOD_GET_TOKEN,
            asyncUnaryCall(
              new MethodHandlers<
                auth.Auth.LoginData,
                auth.Auth.LoginResponse>(
                  this, METHODID_GET_TOKEN)))
          .addMethod(
            METHOD_INVALIDATE_TOKEN,
            asyncUnaryCall(
              new MethodHandlers<
                auth.Auth.Token,
                auth.Auth.Empty>(
                  this, METHODID_INVALIDATE_TOKEN)))
          .addMethod(
            METHOD_GET_PERMISSIONS,
            asyncUnaryCall(
              new MethodHandlers<
                auth.Auth.Token,
                auth.Auth.Permissions>(
                  this, METHODID_GET_PERMISSIONS)))
          .addMethod(
            METHOD_GET_USER_ID,
            asyncUnaryCall(
              new MethodHandlers<
                auth.Auth.Token,
                auth.Auth.UserId>(
                  this, METHODID_GET_USER_ID)))
          .build();
    }
  }

  /**
   */
  public static final class AuthServiceStub extends io.grpc.stub.AbstractStub<AuthServiceStub> {
    private AuthServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AuthServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AuthServiceStub(channel, callOptions);
    }

    /**
     */
    public void getToken(auth.Auth.LoginData request,
        io.grpc.stub.StreamObserver<auth.Auth.LoginResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_GET_TOKEN, getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void invalidateToken(auth.Auth.Token request,
        io.grpc.stub.StreamObserver<auth.Auth.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_INVALIDATE_TOKEN, getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getPermissions(auth.Auth.Token request,
        io.grpc.stub.StreamObserver<auth.Auth.Permissions> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_GET_PERMISSIONS, getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getUserId(auth.Auth.Token request,
        io.grpc.stub.StreamObserver<auth.Auth.UserId> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_GET_USER_ID, getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class AuthServiceBlockingStub extends io.grpc.stub.AbstractStub<AuthServiceBlockingStub> {
    private AuthServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AuthServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AuthServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public auth.Auth.LoginResponse getToken(auth.Auth.LoginData request) {
      return blockingUnaryCall(
          getChannel(), METHOD_GET_TOKEN, getCallOptions(), request);
    }

    /**
     */
    public auth.Auth.Empty invalidateToken(auth.Auth.Token request) {
      return blockingUnaryCall(
          getChannel(), METHOD_INVALIDATE_TOKEN, getCallOptions(), request);
    }

    /**
     */
    public auth.Auth.Permissions getPermissions(auth.Auth.Token request) {
      return blockingUnaryCall(
          getChannel(), METHOD_GET_PERMISSIONS, getCallOptions(), request);
    }

    /**
     */
    public auth.Auth.UserId getUserId(auth.Auth.Token request) {
      return blockingUnaryCall(
          getChannel(), METHOD_GET_USER_ID, getCallOptions(), request);
    }
  }

  /**
   */
  public static final class AuthServiceFutureStub extends io.grpc.stub.AbstractStub<AuthServiceFutureStub> {
    private AuthServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AuthServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AuthServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<auth.Auth.LoginResponse> getToken(
        auth.Auth.LoginData request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_GET_TOKEN, getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<auth.Auth.Empty> invalidateToken(
        auth.Auth.Token request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_INVALIDATE_TOKEN, getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<auth.Auth.Permissions> getPermissions(
        auth.Auth.Token request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_GET_PERMISSIONS, getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<auth.Auth.UserId> getUserId(
        auth.Auth.Token request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_GET_USER_ID, getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_TOKEN = 0;
  private static final int METHODID_INVALIDATE_TOKEN = 1;
  private static final int METHODID_GET_PERMISSIONS = 2;
  private static final int METHODID_GET_USER_ID = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AuthServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AuthServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_TOKEN:
          serviceImpl.getToken((auth.Auth.LoginData) request,
              (io.grpc.stub.StreamObserver<auth.Auth.LoginResponse>) responseObserver);
          break;
        case METHODID_INVALIDATE_TOKEN:
          serviceImpl.invalidateToken((auth.Auth.Token) request,
              (io.grpc.stub.StreamObserver<auth.Auth.Empty>) responseObserver);
          break;
        case METHODID_GET_PERMISSIONS:
          serviceImpl.getPermissions((auth.Auth.Token) request,
              (io.grpc.stub.StreamObserver<auth.Auth.Permissions>) responseObserver);
          break;
        case METHODID_GET_USER_ID:
          serviceImpl.getUserId((auth.Auth.Token) request,
              (io.grpc.stub.StreamObserver<auth.Auth.UserId>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static final class AuthServiceDescriptorSupplier implements io.grpc.protobuf.ProtoFileDescriptorSupplier {
    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return auth.Auth.getDescriptor();
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (AuthServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AuthServiceDescriptorSupplier())
              .addMethod(METHOD_GET_TOKEN)
              .addMethod(METHOD_INVALIDATE_TOKEN)
              .addMethod(METHOD_GET_PERMISSIONS)
              .addMethod(METHOD_GET_USER_ID)
              .build();
        }
      }
    }
    return result;
  }
}
