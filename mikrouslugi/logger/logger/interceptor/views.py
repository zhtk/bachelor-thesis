from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def in_hook(request):
    res = request.POST.dict()
    print("IN: " + str(res))
    return HttpResponse(json.dumps(res, ensure_ascii=False))


@csrf_exempt
def out_hook(request):
    res = request.POST.dict()['data']
    print("OUT: " + res)
    return HttpResponse(res)
