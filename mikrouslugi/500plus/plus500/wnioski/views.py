from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def lista(request):
	#json.dumps(res, ensure_ascii=False)
	return HttpResponse("OK")


@csrf_exempt
def wyslij(request):
	return HttpResponse("{\"status\":\"OK\"}")
