from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import UpdateAPIView

from ..models import Employee
from ..serializers import EmployeeSerializer, EmployeeCreateSerializer
from ..utilities import get_random_emp_values
from collections import Counter
EMPLOYEES_ON_SINGLE_PAGE = 40


def get_paginated_queryset_response(qs, request, *args, **kwargs):
    paginator = PageNumberPagination()
    paginator.page_size = EMPLOYEES_ON_SINGLE_PAGE
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = EmployeeSerializer(paginated_qs, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def employee_detail_api_view(request, id, *args, **kwargs):
    qs = Employee.objects.filter(id=id)
    print(qs)
    if not qs.exists():
        return Response({"detail": "Employee not found"}, status=404)
    employee_obj = qs.first()
    serializer = EmployeeSerializer(
        instance=employee_obj, context={"request": request})
    return Response(serializer.data, status=200)


@api_view(['GET'])
def get_salary_stats_api_view(request, *args, **kwargs):
    qs = Employee.objects.all()
    salary_list = []
    output = []
    for emp in qs:
        salary_list.append(int(emp.salary))
    salary_list.sort()
    data = Counter(salary_list)
    for pair in data.items():
        output.append({"salary": pair[0],
                       "value": pair[1]})
    return Response(output, status=200)


@api_view(['GET'])
def get_department_stats_api_view(request, *args, **kwargs):
    qs = Employee.objects.all()
    department_list = []
    output = []
    for emp in qs:
        department_list.append(emp.department)
    department_list.sort()
    data = Counter(department_list)
    for pair in data.items():
        output.append({"department": pair[0],
                       "value": pair[1]})
    return Response(output, status=200)


@api_view(['GET'])
def get_departments_api_view(request, *args, **kwargs):
    qs = Employee.objects.all()
    department_list = []
    output = []
    for emp in qs:
        if (emp.department not in department_list):
            department_list.append(emp.department)
    department_list.sort()
    return Response(department_list, status=200)


@api_view(['GET'])
def employee_list_api_view(request, department=None, *args, **kwargs):
    if department is not None:
        query_set = Employee.objects.filter(department=department)
    else:
        query_set = Employee.objects.all()
    employee_id = request.GET.get('employee_id')
    if employee_id != None:
        query_set = query_set.by_employee_id(employee_id)
    return get_paginated_queryset_response(query_set, request)


@api_view(['POST'])
def employee_create_api_view(request, *args, **kwargs):
    serializer = EmployeeCreateSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=201)
    return Response({}, status=400)


@api_view(['POST', 'GET'])
def employee_edit_api_view(request, id, *args, **kwargs):
    qs = Employee.objects.filter(id=id)
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        validated_data = request.data
        serializer.update(qs[0], validated_data)
        return Response(serializer.data, status=201)
    return Response({}, status=400)


@api_view(['GET', 'POST'])
def employee_create_random_api_view(request, *args, **kwargs):
    data = get_random_emp_values()
    serializer = EmployeeCreateSerializer(data=data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=201)
    return Response({}, status=400)


@api_view(["DELETE"])
def employee_delete_api_view(request, id, *args, **kwargs):
    emp_to_delete = Employee.objects.filter(id=id)
    print(emp_to_delete)
    print("delete view")
    if emp_to_delete:
        emp_to_delete.delete()
        return Response({}, status=200)
    else:
        print("Error occured while deleting employee info.")
    return Response({}, status=404)


@api_view(['GET', 'POST'])
def employee_search_api_view(request, keyword, *args, **kwargs):
    if keyword is not None:
        query_set = Employee.objects.search(query=keyword)
    else:
        raise Http404('Keyword not provided.')
    return get_paginated_queryset_response(query_set, request)
