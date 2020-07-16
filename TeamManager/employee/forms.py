from django import forms
from .models import Employee


class EmployeeForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = ['employee_id', 'first_name', 'last_name', 'department', 'team',
                  'position', 'salary', 'contact_number']
