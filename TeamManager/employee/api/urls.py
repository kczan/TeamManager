from django.urls import path

from .views import employee_detail_api_view, employee_list_api_view

urlpatterns = [
    path('<int:employee_id>', employee_detail_api_view,
         name='employee_detail_api_view'),
    path('list', employee_list_api_view)

]
