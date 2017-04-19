from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'main/$', views.mainpage),
    url(r'listing/$', views.listing),
    url(r'positive/$', views.positive),
    url(r'negative/$', views.negative),
    url(r'pending/$', views.pending),
]
