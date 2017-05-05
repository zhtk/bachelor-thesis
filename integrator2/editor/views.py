from django.shortcuts import render
from django.http import HttpResponse, Http404
import grpc
import requests
import json
from zk import integrator as i
from zk import auth_pb2
from zk import auth_pb2_grpc


i.zk.start()
channel = grpc.insecure_channel('localhost:50051')
stub = auth_pb2_grpc.AuthServiceStub(channel)


def node_info(path, perm, level):
	try:
		childs = i.zk.get_children(path)
		item = i.zk.get(path)[0].decode("utf-8")
	except:
		return []
	
	childs = list(map(lambda x: node_info(path + "/" + x, perm, level + 1), childs))
	#if level == 2:
	#	childs = list(filter(lambda x: i.check_permissions(item, perm), childs))
	
	return {
		'content': item,
		'childs': childs,
	}


def list_endpoints(request, token):
	try:
		response = stub.GetPermissions(auth_pb2.Token(token=token))
		perm = response.mask
	except:
		raise Http404("")
	
	res = {
		'view': node_info('/view', perm, 1),
		'read': node_info('/read', perm, 1),
		'write': node_info('/write', perm, 1),
	}
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))


def set_view(request, token):
	pass # TODO jeśli potrzebne
