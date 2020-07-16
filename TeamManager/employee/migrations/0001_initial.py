# Generated by Django 3.0.8 on 2020-07-15 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('employee_id', models.IntegerField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=30, null=True)),
                ('last_name', models.CharField(max_length=30, null=True)),
                ('department', models.CharField(max_length=50, null=True)),
                ('team', models.CharField(max_length=50, null=True)),
                ('position', models.CharField(max_length=30, null=True)),
                ('salary', models.IntegerField()),
                ('contact_number', models.IntegerField(max_length=12)),
            ],
        ),
    ]
