"""TeamManager URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from employee.views import employee_add_form, EmployeeCreateView, employee_home_view, employee_search_view, employee_stats_view
from .views import about_view

urlpatterns = [
    path('', employee_home_view, name='home'),
    path('admin/', admin.site.urls),
    path('api/employee/', include('employee.api.urls')),
    path('add_form', employee_add_form),
    path('create/', EmployeeCreateView.as_view(), name='create-employee'),
    path('search/<str:keyword>', employee_search_view),
    path('stats', employee_stats_view, name='stats'),
    path('about', about_view, name='about'),
]
