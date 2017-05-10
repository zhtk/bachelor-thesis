import json

from django.shortcuts import render
from django.http import HttpResponse
import random

from django.views.decorators.csrf import csrf_exempt


def mainpage(request):
    return render(request, 'notify/mainpage.json')


def listing(request):
    return HttpResponse("Hello, world. You're at the TODO list.")


def positive(request):
    num = random.randint(1, 10)
    return HttpResponse(str(num))


def negative(request):
    num = random.randint(100, 150)
    return HttpResponse(str(num))


def pending(request):
    return HttpResponse("999")


@csrf_exempt
def print_to_stdout(request):
    print("print_to_stdout:")
    print(json.dumps(request.POST.dict(), ensure_ascii=False))
    return HttpResponse()

value = "default"

@csrf_exempt
def set_variable(request):
    new_value = request.POST.dict().get("variable", "")
    print("set variable: from %s to %s" % (value, new_value))
    global value
    value = new_value
    return HttpResponse()

def get_variable(request):
    print("get variable: %s" % value)
    return HttpResponse(value)
