# Generated by Django 3.0.8 on 2020-07-16 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0002_auto_20200715_1557'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='picture',
            field=models.ImageField(default='profile_pic.jpg', upload_to='employee_photos'),
        ),
    ]
