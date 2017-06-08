from django.db import models
from django.contrib import admin


class Wnioskodawca(models.Model):
    id_wnioskodawcy = models.AutoField(primary_key=True)
    
    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
    pesel = models.CharField(max_length=11)
    stan_cywilny = models.CharField(max_length=100)
    obywatelstwo = models.CharField(max_length=100)
    miejscowosc = models.CharField(max_length=100)
    kod_pocztowy = models.CharField(max_length=6)
    ulica = models.CharField(max_length=200)
    nr_domu = models.CharField(max_length=20)
    nr_mieszkania = models.CharField(max_length=20)
    
    def __str__(self):
        return str(self.pesel)

class Dziecko(models.Model):
    id_dziecka = models.AutoField(primary_key=True)
    
    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
    plec = models.CharField(max_length=50)
    pesel = models.CharField(max_length=11)
    stan_cywilny = models.CharField(max_length=100)
    obywatelstwo = models.CharField(max_length=100)
    data_urodzenia = models.CharField(max_length=100)
    
    def __str__(self):
        return str(self.pesel)
	

class CzlonekRodziny(models.Model):
    id_osoby = models.AutoField(primary_key=True)
    
    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
    pesel = models.CharField(max_length=11)
    pokrewienstwo = models.CharField(max_length=100)
    urzad_skarbowy = models.CharField(max_length=255)
    
    def __str__(self):
        return str(self.pesel)

class Wniosek(models.Model):
    STATUS_WNIOSKU = (
        ('0', 'oczekuje'),
        ('1', 'pozytywny'),
        ('2', 'negatywny'),
    )
    
    id_wniosku = models.AutoField(primary_key=True)
    
    autor = models.ForeignKey(Wnioskodawca, on_delete=models.CASCADE)
    dzieci = models.ManyToManyField(Dziecko)
    rodzina = models.ManyToManyField(CzlonekRodziny)
    status = models.CharField(max_length=1, choices=STATUS_WNIOSKU, default='0')
    dodano = models.DateTimeField(auto_now_add=True)
    niepelnosprawne = models.CharField(max_length=100)
    
    def __str__(self):
        return "wniosek nr " + str(self.id_wniosku)
		


admin.site.register(Wnioskodawca)
admin.site.register(Dziecko)
admin.site.register(CzlonekRodziny)
admin.site.register(Wniosek)
