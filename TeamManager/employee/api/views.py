from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination

from ..models import Employee
from ..serializers import EmployeeSerializer, EmployeeCreateSerializer
from ..utilities import get_random_emp_values
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
    if not qs.exists():
        return Response({"detail": "Employee not found"}, status=404)
    employee_obj = qs.first()
    serializer = EmployeeSerializer(
        instance=employee_obj, context={"request": request})
    return Response(serializer.data, status=200)


@api_view(['GET'])
def employee_list_api_view(request, *args, **kwargs):
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
