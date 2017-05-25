# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-17 14:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CzlonekRodziny',
            fields=[
                ('id_osoby', models.AutoField(primary_key=True, serialize=False)),
                ('pokrewienstwo', models.CharField(max_length=100)),
                ('urzad_skarbowy', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Dziecko',
            fields=[
                ('id_dziecka', models.AutoField(primary_key=True, serialize=False)),
                ('imie', models.CharField(max_length=50)),
                ('nazwisko', models.CharField(max_length=50)),
                ('plec', models.CharField(max_length=50)),
                ('pesel', models.CharField(max_length=11)),
                ('stan_cywilny', models.CharField(max_length=100)),
                ('obywatelstwo', models.CharField(max_length=100)),
                ('data_urodzenia', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Wniosek',
            fields=[
                ('id_wniosku', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Wnioskodawca',
            fields=[
                ('id_wnioskodawcy', models.AutoField(primary_key=True, serialize=False)),
                ('imie', models.CharField(max_length=50)),
                ('nazwisko', models.CharField(max_length=50)),
                ('pesel', models.CharField(max_length=11)),
                ('stan_cywilny', models.CharField(max_length=100)),
                ('obywatelstwo', models.CharField(max_length=100)),
                ('miejscowosc', models.CharField(max_length=100)),
                ('kod_pocztowy', models.CharField(max_length=6)),
                ('ulica', models.CharField(max_length=200)),
                ('nr_domu', models.CharField(max_length=20)),
                ('nr_mieszkania', models.CharField(max_length=20)),
            ],
        ),
        migrations.AddField(
            model_name='wniosek',
            name='autor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wnioski.Wnioskodawca'),
        ),
        migrations.AddField(
            model_name='wniosek',
            name='dzieci',
            field=models.ManyToManyField(to='wnioski.Dziecko'),
        ),
        migrations.AddField(
            model_name='wniosek',
            name='rodzina',
            field=models.ManyToManyField(to='wnioski.CzlonekRodziny'),
        ),
    ]