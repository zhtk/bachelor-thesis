# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-26 09:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('od', models.CharField(max_length=50)),
                ('do', models.CharField(max_length=50)),
                ('data', models.CharField(max_length=11)),
                ('topic', models.CharField(max_length=100)),
                ('content', models.CharField(max_length=1000)),
            ],
        ),
    ]
