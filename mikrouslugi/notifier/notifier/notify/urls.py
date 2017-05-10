from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'main/$', views.mainpage),
    url(r'listing/$', views.listing),
    url(r'positive/$', views.positive),
    url(r'negative/$', views.negative),
    url(r'pending/$', views.pending),
    url(r'print_to_stdout/$', views.print_to_stdout),
    url(r'set_variable/$', views.set_variable),
    url(r'get_variable/$', views.get_variable),
]
