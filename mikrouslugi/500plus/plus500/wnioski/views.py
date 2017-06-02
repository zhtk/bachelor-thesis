from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json
import requests
from time import gmtime, strftime


@csrf_exempt
def lista(request):
	res = []
	
	for i in Wniosek.objects.all():
		res.append({
			'typ': '500plus',
			'status': i.status,
			'data': str(i.dodano),
			'id':i.id_wniosku,
		})
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))


@csrf_exempt
def dajWniosek(request):
	ident = request.GET.get('id', '7')
	wniosek = Wniosek.objects.get(id_wniosku=ident)
		
	res = {
		'wnioskodawca_imie': wniosek.autor.imie,
		'wnioskodawca_nazwisko': wniosek.autor.nazwisko,
		'wnioskodawca_pesel': wniosek.autor.pesel,
		'wnioskodawca_stan_cyw': wniosek.autor.stan_cywilny,
		'wnioskodawca_obywatelstwo': wniosek.autor.obywatelstwo,
		'wnioskodawca_miasto': wniosek.autor.miejscowosc,
		'wnioskodawca_zipcode': wniosek.autor.kod_pocztowy,
		'wnioskodawca_ulica': wniosek.autor.ulica,
		'wnioskodawca_nr_domu': wniosek.autor.nr_domu,
		'wnioskodawca_nr_mieszk': wniosek.autor.nr_mieszkania,
	}
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))


@csrf_exempt
def ustaw(request):
	ident = request.POST.get('id', '7')
	wniosek = Wniosek.objects.get(id_wniosku=ident)
	wniosek.status = request.POST.get('status', '1')
	wniosek.save()
	
	if wniosek.status == '1':
		status = 'pozytywna'
	elif wniosek.status == '2':
		status = 'negatywna'
	else:
		status = 'nieprawidłowa'
	
	data = strftime("%Y-%m-%d", gmtime())
	msg = {
		'from':'Usługa 500 plus',
		'to':'user',
		'date':data,
		'topic':'Rozpatrzono wniosek 500+',
		'content':'Rozpatrzono wniosek. Otrzymana odpowiedź jest ' + status + '.',
	}
	requests.post("http://localhost:9000/write/mail-send/", data=msg)
	
	return HttpResponse('')


@csrf_exempt
def wyslij(request):
	autor = Wnioskodawca(
		imie = request.POST.get('wnioskodawca_imie', 'Jan'),
		nazwisko = request.POST.get('wnioskodawca_nazwisko', 'Kluczyk'),
		pesel = request.POST.get('wnioskodawca_pesel', '12345678901'),
		stan_cywilny = request.POST.get('wnioskodawca_stan_cyw', 'Kawaler'),
		obywatelstwo = request.POST.get('wnioskodawca_obywatelstwo', 'polskie'),
		miejscowosc = request.POST.get('wnioskodawca_miasto', 'Warszawa'),
		kod_pocztowy = request.POST.get('wnioskodawca_zipcode', '02-097'),
		ulica = request.POST.get('wnioskodawca_ulica', 'Banacha'),
		nr_domu = request.POST.get('wnioskodawca_nr_domu', '2'),
		nr_mieszkania = request.POST.get('wnioskodawca_nr_mieszk', '2043')
	)
	autor.save()
	wniosek = Wniosek(autor=autor)
	wniosek.save()
	
	data = strftime("%Y-%m-%d", gmtime())
	msg = {
		'from':'Usługa 500 plus',
		'to':'user',
		'date':data,
		'topic':'Złożono wniosek 500+',
		'content':'Gratulacje, wniosek złożony. Status wniosku dostępny jest\
			w sekcji \"Moje wnioski\"',
	}
	requests.post("http://localhost:9000/write/mail-send/", data=msg)
	
	return HttpResponse("")
