# Generated by Django 3.2.23 on 2023-12-14 18:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('habits', '0002_auto_20231214_1816'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='habit',
            name='completed',
        ),
        migrations.RemoveField(
            model_name='habit',
            name='last_completed',
        ),
    ]
