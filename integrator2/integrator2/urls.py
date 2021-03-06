"""integrator2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from endpoints import views as endpoint
from menu import views as menu
from editor import views as editor

urlpatterns = [
    url(r'^view/(?P<name>[a-zA-Z0-9_-]+)/$', endpoint.view_endpoint, name='view_endpoint'),
    url(r'^read/(?P<name>[a-zA-Z0-9_-]+)/$', endpoint.read_endpoint, name='read_endpoint'),
    url(r'^write/(?P<name>[a-zA-Z0-9_-]+)/$', endpoint.write_endpoint, name='write_endpoint'),
    url(r'^menu/$', menu.get_menu, name='get_menu'),
    url(r'^list/(?P<token>[^/]+)/$', editor.list_endpoints, name='list_endpoints'),
    url(r'^admin/', admin.site.urls),
    url(r'^category/(?P<category_name>[a-zA-Z0-9_-]+)/$', endpoint.category_endpoint, name='category_endpoint'),
]
