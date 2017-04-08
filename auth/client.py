# Przykładowy klient

import grpc
import auth_pb2
import auth_pb2_grpc

def login_status(status):
	if status == auth_pb2.LoginResponse.OK:
		return "OK"
	elif status == auth_pb2.LoginResponse.INVALID_CREDIENTIALS:
		return "INVALID_CREDIENTIALS"
	else:
		return "???"

if __name__ == '__main__':
	# Connecting to server
	channel = grpc.insecure_channel('localhost:50051')
	stub = auth_pb2_grpc.AuthServiceStub(channel)
	
	# Valid credentials
	response = stub.GetToken(auth_pb2.LoginData(login='admin', password='admin'))
	print("Client received: " + response.token + " " + login_status(response.status))
	
	# Valid login, invalid pass
	response = stub.GetToken(auth_pb2.LoginData(login='admin', password='pass'))
	print("Client received: " + response.token + " " + login_status(response.status))
	
	# Invalid login
	response = stub.GetToken(auth_pb2.LoginData(login='admin2', password='pass'))
	print("Client received: " + response.token + " " + login_status(response.status))
	
	# Invalidating token
	stub.InvalidateToken(auth_pb2.Token(token='admin'))
	
	# Getting permission mask
	response = stub.GetPermissions(auth_pb2.Token(token='admin'))
	print("Client received mask: " + response.mask)
	
	response = stub.GetPermissions(auth_pb2.Token(token='fakeuser'))
	print("Client received mask: " + response.mask)
	
	# Get UserId
	response = stub.GetUserId(auth_pb2.Token(token='admin'))
	print("Client received: response = %d id = %s" % (response.status, response.uid))
	
	response = stub.GetUserId(auth_pb2.Token(token='fakeuser'))
	print("Client received: response = %d id = %s" % (response.status, response.uid))
