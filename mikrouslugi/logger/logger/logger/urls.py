"""logger URL Configuration
"""
from django.conf.urls import url
from django.contrib import admin
from interceptor import views

urlpatterns = [
	url(r'^in/$', views.in_hook),
	url(r'^out/$', views.out_hook),
    #url(r'^admin/', admin.site.urls),
]
