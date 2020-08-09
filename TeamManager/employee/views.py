from django.shortcuts import render
from django.urls import reverse_lazy


from .forms import EmployeeModalForm, Employee
from bootstrap_modal_forms.generic import BSModalCreateView
# Create your views here.


def employee_add_form(request, *args, **kwargs):
    form = EmployeeForm(request.POST, request.FILES)
    if form.is_valid():
        # employee_obj = form.save(commit=False)
        # employee_id = form.cleaned_data.get('employee_id')
        # first_name = form.cleaned_data.get('first_name')
        # last_name = form.cleaned_data.get('last_name')
        # department = form.cleaned_data.get('department')
        # team = form.cleaned_data.get('team')
        # position = form.cleaned_data.get('position')
        # salary = form.cleaned_data.get('salary')
        # contact_number = form.cleaned_data.get('contact_number')
        # image = form.cleaned_data.get('image')
        # employee_obj.save()

        form.save()

    context = {
        "form": form,
        "title": 'Add a new employee',
        "btn_label": "Add"
    }

    return render(request, 'employee/form.html', context)


def employee_home_view(request, *args, **kwargs):
    return render(request, 'home.html', {})


def employee_search_view(request, keyword, *args, **kwargs):
    context = {
        "keyword": keyword
    }
    return render(request, 'employee/search.html', context)


def employee_stats_view(request, *args, **kwargs):
    return render(request, 'employee/stats.html', {})


class EmployeeCreateView(BSModalCreateView):
    template_name = 'employee/form.html'
    form_class = EmployeeModalForm
    success_message = "Employee added."
    success_url = reverse_lazy('home')
