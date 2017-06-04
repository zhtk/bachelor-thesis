from django.db import models
from django.contrib import admin


class Osoba(models.Model):
    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
    pesel = models.CharField(max_length=11)
    data_urodzenia = models.CharField(max_length=10)
    nip = models.CharField(max_length=100)
    
    miejscowosc = models.CharField(max_length=100)
    kod_pocztowy = models.CharField(max_length=6)
    ulica = models.CharField(max_length=200)
    nr_domu = models.CharField(max_length=20)
    nr_mieszkania = models.CharField(max_length=20)
    
    def __str__(self):
        return self.imie + ' ' + self.nazwisko


class Zwolnienie(models.Model):    
    osoba = models.ForeignKey(Osoba, on_delete=models.CASCADE)
    poczatek = models.CharField(max_length=50)
    koniec = models.CharField(max_length=50)
    icd = models.CharField(max_length=50)
    opis = models.CharField(max_length=250)
    
    def __str__(self):
        return "Nr " + str(self.id)


admin.site.register(Osoba)
admin.site.register(Zwolnienie)
