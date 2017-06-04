from django.conf.urls import url
from django.contrib import admin
from zwolnienia import views

urlpatterns = [
    url(r'^osoby/', views.osoby),
    url(r'^lista/', views.zwolnienia),
    url(r'^dodaj/', views.dodaj),
    url(r'^admin/', admin.site.urls),
]
