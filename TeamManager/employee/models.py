from django.db import models
from django.db.models import Q


class EmployeeManager(models.Manager):
    def get_queryset(self):
        return EmployeeQuerySet(self.model, using=self._db)

    def search(self, query=None):
        return self.get_queryset().search(query=query)


class EmployeeQuerySet(models.QuerySet):
    def search(self, query=None):
        qs = self
        if query is not None:
            lookup = (Q(id=query))
            qs = qs.filter(lookup).distinct()
        return qs


class Employee(models.Model):
    # id = models.AutoField(primary_key=True)
    first_name = models.CharField(blank=False, null=True, max_length=30)
    last_name = models.CharField(blank=False, null=True, max_length=30)
    department = models.CharField(blank=False, null=True, max_length=50)
    position = models.CharField(blank=False, null=True, max_length=30)
    salary = models.CharField(blank=False, max_length=10)
    contact_number = models.CharField(blank=False, max_length=10)
    image = models.ImageField(
        default='profile_pic.jpg', upload_to='employee_photos')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    objects = EmployeeManager()
