# Generated by Django 3.0.8 on 2020-07-17 16:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0008_auto_20200717_1608'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='team',
        ),
    ]
