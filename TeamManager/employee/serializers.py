from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    employee_id = serializers.SerializerMethodField(read_only=True)
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    department = serializers.SerializerMethodField(read_only=True)
    team = serializers.SerializerMethodField(read_only=True)
    position = serializers.SerializerMethodField(read_only=True)
    salary = serializers.SerializerMethodField(read_only=True)
    contact_number = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Employee
        fields = ['employee_id', 'first_name', 'last_name', 'department', 'team',
                  'position', 'salary', 'contact_number']

    def get_employee_id(self, obj):
        return obj.employee_id

    def get_first_name(self, obj):
        return obj.first_name

    def get_last_name(self, obj):
        return obj.last_name

    def get_department(self, obj):
        return obj.department

    def get_team(self, obj):
        return obj.team

    def get_position(self, obj):
        return obj.position

    def get_salary(self, obj):
        return obj.salary

    def get_contact_number(self, obj):
        return obj.contact_number
