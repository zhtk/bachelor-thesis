from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from .apps import EndpointsConfig
from zk import integrator as i
import requests
import json

i.zk.start()

@csrf_exempt
def view_endpoint(request, name):
	try:
		return HttpResponse(i.get_view_endpoint(name))
	except:
		raise Http404("Unknown view endpoint")


@csrf_exempt
def read_endpoint(request, name):
	try:
		ep = i.get_read_endpoint(name)
		server = json.loads(ep)
		
		# TODO autoryzacja
		
		url = server['address']
		
		if server['port'] is not None:
			url += ":"
			url += str(server['port'])
		
		payload = request.GET.dict()
		r = requests.get(url, params=payload)
		return HttpResponse(r.text)
	except:
		raise Http404("Unknown view endpoint")


@csrf_exempt
def write_endpoint(request, name):
	return HttpResponse("TODO")

