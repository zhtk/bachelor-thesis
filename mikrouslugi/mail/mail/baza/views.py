from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json


@csrf_exempt
def send(request):
	msg = Mail(
		od=request.POST.dict()['from'],
		do=request.POST.dict()['to'],
		data=request.POST.dict()['date'],
		topic=request.POST.dict()['topic'],
		content=request.POST.dict()['content']
	)
	msg.save()
	return HttpResponse('')

@csrf_exempt
def received(request):
	token = request.GET.dict()['token']
	res = []

	for i in Mail.objects.filter(do=token):
		res.append({
			"id": i.id,
			"from": i.od,
			"to": i.do,
			"date": i.data,
			"topic": i.topic,
			"content": i.content,
		})

	return HttpResponse(json.dumps(res, ensure_ascii=False))

@csrf_exempt
def sent(request):
	token = request.GET.dict()['token']
	res = []

	for i in Mail.objects.filter(od=token):
		res.append({
			"id": i.id,
			"from": i.od,
			"to": i.do,
			"date": i.data,
			"topic": i.topic,
			"content": i.content,
		})
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))
