from django.urls import path

from .views import (employee_detail_api_view,
                    employee_list_api_view,
                    employee_create_api_view,
                    employee_create_random_api_view,
                    employee_delete_api_view,
                    employee_search_api_view,
                    get_salary_stats_api_view,
                    get_department_stats_api_view,
                    get_departments_api_view)

urlpatterns = [
    path('create-employee', employee_create_api_view),
    path('list', employee_list_api_view),
    path('list/<str:department>', employee_list_api_view),
    path('random-employee', employee_create_random_api_view),
    path('get-salary-stats', get_salary_stats_api_view),
    path('get-department-stats', get_department_stats_api_view),
    path('departments', get_departments_api_view),
    path('delete-employee/<int:id>', employee_delete_api_view),
    path('search/<str:keyword>', employee_search_api_view),
    path('<int:id>', employee_detail_api_view,
         name='employee_detail_api_view'),
]
