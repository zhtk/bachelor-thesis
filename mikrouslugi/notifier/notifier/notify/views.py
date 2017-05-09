from django.shortcuts import render
from django.http import HttpResponse
import random


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
