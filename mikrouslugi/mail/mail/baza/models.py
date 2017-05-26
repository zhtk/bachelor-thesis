from django.db import models
from django.contrib import admin


class Mail(models.Model):
    od = models.CharField(max_length=50)
    do = models.CharField(max_length=50)
    data = models.CharField(max_length=11)
    topic = models.CharField(max_length=100)
    content = models.CharField(max_length=1000)
    
    def __str__(self):
        return str(self.topic)

admin.site.register(Mail)
