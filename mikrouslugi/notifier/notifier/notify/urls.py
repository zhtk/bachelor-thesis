from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'main/$', views.mainpage, name='mainpage'),
    url(r'listing/$', views.listing, name='mainpage'),
    url(r'positive/$', views.positive, name='mainpage'),
    url(r'negative/$', views.negative, name='mainpage'),
    url(r'pending/$', views.pending, name='mainpage'),
]
