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
        fields = ['first_name', 'last_name', 'department',
                  'position', 'salary', 'contact_number', 'image']

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
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    department = serializers.SerializerMethodField(read_only=True)
    position = serializers.SerializerMethodField(read_only=True)
    salary = serializers.CharField(read_only=True)
    contact_number = serializers.CharField(read_only=True)
    image = serializers.ImageField(allow_empty_file=True, required=False)

    class Meta:
        model = Employee
        fields = ['first_name', 'last_name', 'department',
                  'position', 'salary', 'contact_number', 'image']

    def validate_salary(self, value):
        if not value:
            return 0
        try:
            return int(value)
        except ValueError:
            raise serializers.ValidationError('You must supply an integer')

    def validate_contact_number(self, value):
        if not value:
            return 0
        try:
            return int(value)
        except ValueError:
            raise serializers.ValidationError('You must supply an integer')

    def validate_content(self, value):
        if len(value) > settings.MAX_TEXT_LENGTH:
            raise serializers.ValidationError(
                'Maximum text length exceeded.')
        return value

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
