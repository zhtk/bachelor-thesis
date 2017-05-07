from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from .apps import EndpointsConfig
import grpc
import requests
import json
from zk import integrator as i
from zk import auth_pb2
from zk import auth_pb2_grpc


i.zk.start()
channel = grpc.insecure_channel('localhost:50051')
stub = auth_pb2_grpc.AuthServiceStub(channel)


@csrf_exempt
def view_endpoint(request, name):
	try:
		return HttpResponse(i.get_view_endpoint(name))
	except:
		raise Http404("Unknown view endpoint")


def hook_in(params, etype, endpoint):
	hooks = i.get_hooks_list('in', etype, endpoint)
	
	for url in hooks:
		params = requests.post(url, data=params)
		params = json.loads(params.text)
	
	return params


def hook_out(result, etype, endpoint):
	hooks = i.get_hooks_list('out', etype, endpoint)
	
	for url in hooks:
		pack = {'data':result}
		result = requests.post(url, data=pack).text
	
	return result


@csrf_exempt
def read_endpoint(request, name):
	# Uprawnienia użytkownika
	try:
		token = request.GET.dict()['token']
		response = stub.GetPermissions(auth_pb2.Token(token=token))
		perm = response.mask
	except:
		perm = ''
	
	# Sprawdzenie uprawnień
	try:
		expected = i.get_read_endpoint_permissions(name)
		
		if not i.check_permissions(expected, perm):
			raise Http404("")
	except:
		raise Http404("")
	
	# Pobranie endpointa i wykonanie zapytania
	try:
		ep = i.get_read_endpoint(name)
		server = json.loads(ep)
		
		url = server['address']
		
		if server['port'] is not None:
			url += ":"
			url += str(server['port'])
		
		payload = request.GET.dict()
		payload = hook_in(payload, 'read', name)
		r = requests.get(url, params=payload)
		r = hook_out(r.text, 'read', name)
		return HttpResponse(r)
	except:
		raise Http404("Unknown read endpoint")


@csrf_exempt
def write_endpoint(request, name):
	# Uprawnienia użytkownika
	try:
		token = request.POST.dict()['token']
		response = stub.GetPermissions(auth_pb2.Token(token=token))
		perm = response.mask
	except:
		perm = ''
	
	# Sprawdzenie uprawnień
	try:
		expected = i.get_write_endpoint_permissions(name)
		
		if not i.check_permissions(expected, perm):
			raise Http404("")
	except:
		raise Http404("")
	
	try:
		ep = i.get_write_endpoint(name)
		server = json.loads(ep)
		
		url = server['address']
		
		if server['port'] is not None:
			url += ":"
			url += str(server['port'])
		
		payload = request.POST.dict()
		payload = hook_in(payload, 'write', name)
		r = requests.post(url, data=payload)
		r = hook_out(r.text, 'write', name)
		return HttpResponse(r)
	except:
		raise Http404("Unknown write endpoint")

