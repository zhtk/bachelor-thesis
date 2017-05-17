from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json


@csrf_exempt
def lista(request):
	res = []
	
	for i in Wniosek.objects.all():
		res.append({
			'typ': '500plus',
			'status': i.status,
			'data': str(i.dodano),
		})
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))


@csrf_exempt
def wyslij(request):
	return HttpResponse("{\"status\":\"OK\"}")
