from django.urls import path

from .views import employee_detail_api_view, employee_list_api_view, employee_create_api_view, employee_create_random_api_view

urlpatterns = [
    path('create-employee', employee_create_api_view),
    path('list', employee_list_api_view),
    path('random-employee', employee_create_random_api_view),
    path('<int:employee_id>', employee_detail_api_view,
         name='employee_detail_api_view'),
]
