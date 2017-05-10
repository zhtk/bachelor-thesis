#!/usr/bin/env python3

from concurrent import futures
import time
import grpc
import auth_pb2
import auth_pb2_grpc


class Server(auth_pb2_grpc.AuthServiceServicer):
    # Pusta maska uprawnień na wypadek błędu
    EMPTY_MASK = '000'

    USERS = {
        # Login: (hasło, uprawnienia, pesel)
        'admin': ('admin', '111', '9901020300001'),
        'user': ('user', '100', '9901020300002'),
        'rzecznik': ('zalewajka', '010', '9901020300003'),
        'lekarz': ('zus', '001', '9901020300003'),
    }

    def GetToken(self, request, context):
        print("GetToken: %s %s" % (request.login, request.password))
        try:
            user = self.USERS[request.login]

            if request.password == user[0]:
                token = request.login
                return auth_pb2.LoginResponse(token=token, status=auth_pb2.LoginResponse.OK)
            else:
                return auth_pb2.LoginResponse(token='', status=auth_pb2.LoginResponse.INVALID_CREDIENTIALS)
        except KeyError as e:
            return auth_pb2.LoginResponse(token='', status=auth_pb2.LoginResponse.INVALID_CREDIENTIALS)

    def InvalidateToken(self, request, context):
        print("Inavalidated %s" % request.token)  # Logowanie jest fejkowe, więc nic nie robimy
        return auth_pb2.Empty()

    def GetPermissions(self, request, context):
        try:
            user = self.USERS[request.token]  # Login jest taki sam jak token
            print("GetPermissions token = %s mask = %s" % (request.token, user[1]))
            return auth_pb2.Permissions(mask=user[1])
        except KeyError as e:
            print("GetPermission: No user; token = %s" % request.token)
            return auth_pb2.Permissions(mask=self.EMPTY_MASK)

    def GetUserId(self, request, context):
        try:
            print("GetUserId token = %s" % request.token)
            user = self.USERS[request.token]
            print("  UserId = %s" % user[2])
            return auth_pb2.UserId(status=auth_pb2.UserId.OK,
                                   uid=user[2])
        except KeyError as e:
            return auth_pb2.UserId(status=auth_pb2.UserId.NO_USER, uid='')


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    auth_pb2_grpc.add_AuthServiceServicer_to_server(Server(), server)
    server.add_insecure_port('[::]:50051')
    server.start()

    try:
        print("Running...")
        while True:
            time.sleep(1000)
    except KeyboardInterrupt:
        server.stop(0)
        print("Stopped")


if __name__ == '__main__':
    serve()
