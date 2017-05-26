from django.conf.urls import url
from django.contrib import admin
from baza import views

urlpatterns = [
    url(r'^sent/', views.sent),
    url(r'^rec/', views.received),
    url(r'^send/', views.send),
    url(r'^admin/', admin.site.urls),
]
