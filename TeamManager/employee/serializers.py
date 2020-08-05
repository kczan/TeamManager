from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    department = serializers.SerializerMethodField(read_only=True)
    position = serializers.SerializerMethodField(read_only=True)
    salary = serializers.CharField(read_only=True)
    contact_number = serializers.CharField(read_only=True)
    image = serializers.ImageField(allow_empty_file=True, required=False)

    class Meta:
        model = Employee
        fields = ['id', 'first_name', 'last_name', 'department',
                  'position', 'salary', 'contact_number', 'image']

    def get_id(self, obj):
        return obj.id

    def get_first_name(self, obj):
        return obj.first_name

    def get_last_name(self, obj):
        return obj.last_name

    def get_department(self, obj):
        return obj.department

    def get_position(self, obj):
        return obj.position

    def get_salary(self, obj):
        return obj.salary

    def get_contact_number(self, obj):
        return obj.contact_number

    def get_image(self, obj):
        print(obj.image)
        return obj.image


class EmployeeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['first_name', 'last_name', 'department',
                  'position', 'salary', 'contact_number', 'image']
