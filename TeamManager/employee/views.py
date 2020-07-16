from django.shortcuts import render

from .forms import EmployeeForm
# Create your views here.


def employee_add_form(request, *args, **kwargs):
    form = EmployeeForm(request.POST or None)
    if form.is_valid():
        employee_obj = form.save(commit=False)
        employee_id = form.cleaned_data.get('employee_id')
        first_name = form.cleaned_data.get('first_name')
        last_name = form.cleaned_data.get('last_name')
        department = form.cleaned_data.get('department')
        team = form.cleaned_data.get('team')
        position = form.cleaned_data.get('position')
        salary = form.cleaned_data.get('salary')
        contact_number = form.cleaned_data.get('contact_number')
        employee_obj.save()

    context = {
        "form": form,
        "title": 'Add a new employee',
        "btn_label": "Add"
    }

    return render(request, 'employee/form.html', context)
