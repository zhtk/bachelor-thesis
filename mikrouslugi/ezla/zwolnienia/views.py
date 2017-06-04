from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json


@csrf_exempt
def osoby(request):
	res = []
	
	for i in Osoba.objects.all():
		res.append({
			'id': i.id,
			
			'imie': i.imie,
			'nazwisko': i.nazwisko,
			'pesel': i.pesel,
			'data_urodzenia': i.data_urodzenia,
			'nip': i.nip,
			
			'miejscowosc': i.miejscowosc,
			'kod_pocztowy': i.kod_pocztowy,
			'ulica': i.ulica,
			'nr_domu': i.nr_domu,
			'nr_mieszkania': i.nr_mieszkania,
		})
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))


@csrf_exempt
def zwolnienia(request):
	ident = request.GET.get('id', 'null')
	if ident != 'null':
		osoba = Osoba.objects.get(id=ident)
		zbior = Zwolnienie.objects.filter(osoba__id=osoba.id)
	else:
		zbior = Zwolnienie.objects.all()
	
	res = []
	for i in zbior:
		res.append({
			'id': i.id,
			
			'imie': i.osoba.imie,
			'nazwisko': i.osoba.nazwisko,
			'pesel': i.osoba.pesel,
			'data_urodzenia': i.osoba.data_urodzenia,
			'nip': i.osoba.nip,
			
			'miejscowosc': i.osoba.miejscowosc,
			'kod_pocztowy': i.osoba.kod_pocztowy,
			'ulica': i.osoba.ulica,
			'nr_domu': i.osoba.nr_domu,
			'nr_mieszkania': i.osoba.nr_mieszkania,
			
			'poczatek': i.poczatek,
			'koniec': i.koniec,
			'icd': i.icd,
			'opis': i.opis,
		})
	
	return HttpResponse(json.dumps(res, ensure_ascii=False))


@csrf_exempt
def dodaj(request):
	osoba = request.POST.get('id', '1')
	osoba = Osoba.objects.get(id=osoba)
	
	zwolnienie = Zwolnienie(
		osoba = osoba,
		poczatek = request.POST.get('poczatek', '01-03-2018'),
		koniec = request.POST.get('koniec', '15-03-2018'),
		icd = request.POST.get('icd', 'P10.9'),
		opis = request.POST.get('opis', 'nieokreślone rozerwanie struktury śródczaszkowej i krwotok spowodowany urazem porodowym'),
	)
	zwolnienie.save()
	
	return HttpResponse('')


