# Generated by Django 3.0.8 on 2020-07-17 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0007_auto_20200717_1603'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='employee_id',
        ),
        migrations.AddField(
            model_name='employee',
            name='id',
            field=models.AutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
