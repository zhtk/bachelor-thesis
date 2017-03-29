# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='auth.proto',
  package='',
  syntax='proto2',
  serialized_pb=_b('\n\nauth.proto\",\n\tLoginData\x12\r\n\x05login\x18\x01 \x02(\t\x12\x10\n\x08password\x18\x02 \x02(\t\"q\n\rLoginResponse\x12\r\n\x05token\x18\x01 \x02(\t\x12%\n\x06status\x18\x02 \x02(\x0e\x32\x15.LoginResponse.Status\"*\n\x06Status\x12\x06\n\x02OK\x10\x00\x12\x18\n\x14INVALID_CREDIENTIALS\x10\x01\"\x16\n\x05Token\x12\r\n\x05token\x18\x01 \x02(\t\"\x1b\n\x0bPermissions\x12\x0c\n\x04mask\x18\x01 \x02(\t\"\x07\n\x05\x45mpty2\x80\x01\n\x0b\x41uthService\x12&\n\x08GetToken\x12\n.LoginData\x1a\x0e.LoginResponse\x12!\n\x0fInvalidateToken\x12\x06.Token\x1a\x06.Empty\x12&\n\x0eGetPermissions\x12\x06.Token\x1a\x0c.Permissions')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)



_LOGINRESPONSE_STATUS = _descriptor.EnumDescriptor(
  name='Status',
  full_name='LoginResponse.Status',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='OK', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INVALID_CREDIENTIALS', index=1, number=1,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=131,
  serialized_end=173,
)
_sym_db.RegisterEnumDescriptor(_LOGINRESPONSE_STATUS)


_LOGINDATA = _descriptor.Descriptor(
  name='LoginData',
  full_name='LoginData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='login', full_name='LoginData.login', index=0,
      number=1, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='password', full_name='LoginData.password', index=1,
      number=2, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=14,
  serialized_end=58,
)


_LOGINRESPONSE = _descriptor.Descriptor(
  name='LoginResponse',
  full_name='LoginResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='LoginResponse.token', index=0,
      number=1, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='status', full_name='LoginResponse.status', index=1,
      number=2, type=14, cpp_type=8, label=2,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _LOGINRESPONSE_STATUS,
  ],
  options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=60,
  serialized_end=173,
)


_TOKEN = _descriptor.Descriptor(
  name='Token',
  full_name='Token',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='Token.token', index=0,
      number=1, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=175,
  serialized_end=197,
)


_PERMISSIONS = _descriptor.Descriptor(
  name='Permissions',
  full_name='Permissions',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='mask', full_name='Permissions.mask', index=0,
      number=1, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=199,
  serialized_end=226,
)


_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=228,
  serialized_end=235,
)

_LOGINRESPONSE.fields_by_name['status'].enum_type = _LOGINRESPONSE_STATUS
_LOGINRESPONSE_STATUS.containing_type = _LOGINRESPONSE
DESCRIPTOR.message_types_by_name['LoginData'] = _LOGINDATA
DESCRIPTOR.message_types_by_name['LoginResponse'] = _LOGINRESPONSE
DESCRIPTOR.message_types_by_name['Token'] = _TOKEN
DESCRIPTOR.message_types_by_name['Permissions'] = _PERMISSIONS
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY

LoginData = _reflection.GeneratedProtocolMessageType('LoginData', (_message.Message,), dict(
  DESCRIPTOR = _LOGINDATA,
  __module__ = 'auth_pb2'
  # @@protoc_insertion_point(class_scope:LoginData)
  ))
_sym_db.RegisterMessage(LoginData)

LoginResponse = _reflection.GeneratedProtocolMessageType('LoginResponse', (_message.Message,), dict(
  DESCRIPTOR = _LOGINRESPONSE,
  __module__ = 'auth_pb2'
  # @@protoc_insertion_point(class_scope:LoginResponse)
  ))
_sym_db.RegisterMessage(LoginResponse)

Token = _reflection.GeneratedProtocolMessageType('Token', (_message.Message,), dict(
  DESCRIPTOR = _TOKEN,
  __module__ = 'auth_pb2'
  # @@protoc_insertion_point(class_scope:Token)
  ))
_sym_db.RegisterMessage(Token)

Permissions = _reflection.GeneratedProtocolMessageType('Permissions', (_message.Message,), dict(
  DESCRIPTOR = _PERMISSIONS,
  __module__ = 'auth_pb2'
  # @@protoc_insertion_point(class_scope:Permissions)
  ))
_sym_db.RegisterMessage(Permissions)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), dict(
  DESCRIPTOR = _EMPTY,
  __module__ = 'auth_pb2'
  # @@protoc_insertion_point(class_scope:Empty)
  ))
_sym_db.RegisterMessage(Empty)


try:
  # THESE ELEMENTS WILL BE DEPRECATED.
  # Please use the generated *_pb2_grpc.py files instead.
  import grpc
  from grpc.framework.common import cardinality
  from grpc.framework.interfaces.face import utilities as face_utilities
  from grpc.beta import implementations as beta_implementations
  from grpc.beta import interfaces as beta_interfaces


  class AuthServiceStub(object):

    def __init__(self, channel):
      """Constructor.

      Args:
        channel: A grpc.Channel.
      """
      self.GetToken = channel.unary_unary(
          '/AuthService/GetToken',
          request_serializer=LoginData.SerializeToString,
          response_deserializer=LoginResponse.FromString,
          )
      self.InvalidateToken = channel.unary_unary(
          '/AuthService/InvalidateToken',
          request_serializer=Token.SerializeToString,
          response_deserializer=Empty.FromString,
          )
      self.GetPermissions = channel.unary_unary(
          '/AuthService/GetPermissions',
          request_serializer=Token.SerializeToString,
          response_deserializer=Permissions.FromString,
          )


  class AuthServiceServicer(object):

    def GetToken(self, request, context):
      context.set_code(grpc.StatusCode.UNIMPLEMENTED)
      context.set_details('Method not implemented!')
      raise NotImplementedError('Method not implemented!')

    def InvalidateToken(self, request, context):
      context.set_code(grpc.StatusCode.UNIMPLEMENTED)
      context.set_details('Method not implemented!')
      raise NotImplementedError('Method not implemented!')

    def GetPermissions(self, request, context):
      context.set_code(grpc.StatusCode.UNIMPLEMENTED)
      context.set_details('Method not implemented!')
      raise NotImplementedError('Method not implemented!')


  def add_AuthServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
        'GetToken': grpc.unary_unary_rpc_method_handler(
            servicer.GetToken,
            request_deserializer=LoginData.FromString,
            response_serializer=LoginResponse.SerializeToString,
        ),
        'InvalidateToken': grpc.unary_unary_rpc_method_handler(
            servicer.InvalidateToken,
            request_deserializer=Token.FromString,
            response_serializer=Empty.SerializeToString,
        ),
        'GetPermissions': grpc.unary_unary_rpc_method_handler(
            servicer.GetPermissions,
            request_deserializer=Token.FromString,
            response_serializer=Permissions.SerializeToString,
        ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
        'AuthService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


  class BetaAuthServiceServicer(object):
    """The Beta API is deprecated for 0.15.0 and later.

    It is recommended to use the GA API (classes and functions in this
    file not marked beta) for all further purposes. This class was generated
    only to ease transition from grpcio<0.15.0 to grpcio>=0.15.0."""
    def GetToken(self, request, context):
      context.code(beta_interfaces.StatusCode.UNIMPLEMENTED)
    def InvalidateToken(self, request, context):
      context.code(beta_interfaces.StatusCode.UNIMPLEMENTED)
    def GetPermissions(self, request, context):
      context.code(beta_interfaces.StatusCode.UNIMPLEMENTED)


  class BetaAuthServiceStub(object):
    """The Beta API is deprecated for 0.15.0 and later.

    It is recommended to use the GA API (classes and functions in this
    file not marked beta) for all further purposes. This class was generated
    only to ease transition from grpcio<0.15.0 to grpcio>=0.15.0."""
    def GetToken(self, request, timeout, metadata=None, with_call=False, protocol_options=None):
      raise NotImplementedError()
    GetToken.future = None
    def InvalidateToken(self, request, timeout, metadata=None, with_call=False, protocol_options=None):
      raise NotImplementedError()
    InvalidateToken.future = None
    def GetPermissions(self, request, timeout, metadata=None, with_call=False, protocol_options=None):
      raise NotImplementedError()
    GetPermissions.future = None


  def beta_create_AuthService_server(servicer, pool=None, pool_size=None, default_timeout=None, maximum_timeout=None):
    """The Beta API is deprecated for 0.15.0 and later.

    It is recommended to use the GA API (classes and functions in this
    file not marked beta) for all further purposes. This function was
    generated only to ease transition from grpcio<0.15.0 to grpcio>=0.15.0"""
    request_deserializers = {
      ('AuthService', 'GetPermissions'): Token.FromString,
      ('AuthService', 'GetToken'): LoginData.FromString,
      ('AuthService', 'InvalidateToken'): Token.FromString,
    }
    response_serializers = {
      ('AuthService', 'GetPermissions'): Permissions.SerializeToString,
      ('AuthService', 'GetToken'): LoginResponse.SerializeToString,
      ('AuthService', 'InvalidateToken'): Empty.SerializeToString,
    }
    method_implementations = {
      ('AuthService', 'GetPermissions'): face_utilities.unary_unary_inline(servicer.GetPermissions),
      ('AuthService', 'GetToken'): face_utilities.unary_unary_inline(servicer.GetToken),
      ('AuthService', 'InvalidateToken'): face_utilities.unary_unary_inline(servicer.InvalidateToken),
    }
    server_options = beta_implementations.server_options(request_deserializers=request_deserializers, response_serializers=response_serializers, thread_pool=pool, thread_pool_size=pool_size, default_timeout=default_timeout, maximum_timeout=maximum_timeout)
    return beta_implementations.server(method_implementations, options=server_options)


  def beta_create_AuthService_stub(channel, host=None, metadata_transformer=None, pool=None, pool_size=None):
    """The Beta API is deprecated for 0.15.0 and later.

    It is recommended to use the GA API (classes and functions in this
    file not marked beta) for all further purposes. This function was
    generated only to ease transition from grpcio<0.15.0 to grpcio>=0.15.0"""
    request_serializers = {
      ('AuthService', 'GetPermissions'): Token.SerializeToString,
      ('AuthService', 'GetToken'): LoginData.SerializeToString,
      ('AuthService', 'InvalidateToken'): Token.SerializeToString,
    }
    response_deserializers = {
      ('AuthService', 'GetPermissions'): Permissions.FromString,
      ('AuthService', 'GetToken'): LoginResponse.FromString,
      ('AuthService', 'InvalidateToken'): Empty.FromString,
    }
    cardinalities = {
      'GetPermissions': cardinality.Cardinality.UNARY_UNARY,
      'GetToken': cardinality.Cardinality.UNARY_UNARY,
      'InvalidateToken': cardinality.Cardinality.UNARY_UNARY,
    }
    stub_options = beta_implementations.stub_options(host=host, metadata_transformer=metadata_transformer, request_serializers=request_serializers, response_deserializers=response_deserializers, thread_pool=pool, thread_pool_size=pool_size)
    return beta_implementations.dynamic_stub(channel, 'AuthService', cardinalities, options=stub_options)
except ImportError:
  pass
# @@protoc_insertion_point(module_scope)
