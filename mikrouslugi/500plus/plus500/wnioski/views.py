from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json
import requests


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
	autor = Wnioskodawca(
		imie = 'Jan',
		nazwisko = 'Kowalski',
		pesel = '12345678901',
		stan_cywilny = 'Kawaler',
		obywatelstwo = 'polskie',
		miejscowosc = 'Warszawa',
		kod_pocztowy = '02-097',
		ulica = 'Banacha',
		nr_domu = '2',
		nr_mieszkania = '2043'
	)
	autor.save()
	wniosek = Wniosek(autor=autor)
	wniosek.save()
	
	msg = {
		'from':'Usługa 500 plus',
		'to':'user',
		'date':'2017-07-08',
		'topic':'Złożono wniosek 500+',
		'content':'Gratulacje, wniosek złożony. Status wniosku dostępny jest\
			w sekcji \"Moje wnioski\"',
	}
	requests.post("http://localhost:9000/write/mail-send/", data=msg)
	
	return HttpResponse("")
