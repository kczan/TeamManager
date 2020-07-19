from django import forms
from .models import Employee
from bootstrap_modal_forms.forms import BSModalModelForm


class EmployeeForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = ['image', 'first_name', 'last_name', 'department',
                  'position', 'salary', 'contact_number']


class EmployeeModalForm(BSModalModelForm):
    class Meta:
        model = Employee
        fields = ['image', 'first_name', 'last_name', 'department',
                  'position', 'salary', 'contact_number']
