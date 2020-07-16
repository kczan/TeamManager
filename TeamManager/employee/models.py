from django.db import models

# Create your models here.


class EmployeeManager(models.Manager):
    def get_queryset(self):
        return EmployeeQuerySet(self.model, using=self._db)

    def search(self, query=None):
        return self.get_queryset().search(query=query)


class EmployeeQuerySet(models.QuerySet):
    def search(self, query=None):
        qs = self
        if query is not None:
            or_lookup = (Q(first_name__icontains=query) | Q(
                last_name__icontains=query))
            qs = qs.filter(or_lookup).distinct()
        return qs


class Employee(models.Model):
    employee_id = models.IntegerField(blank=False, primary_key=True)
    first_name = models.CharField(blank=False, null=True, max_length=30)
    last_name = models.CharField(blank=False, null=True, max_length=30)
    department = models.CharField(blank=False, null=True, max_length=50)
    team = models.CharField(blank=False, null=True, max_length=50)
    position = models.CharField(blank=False, null=True, max_length=30)
    salary = models.IntegerField(blank=False)
    contact_number = models.IntegerField(blank=False)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    objects = EmployeeManager()
