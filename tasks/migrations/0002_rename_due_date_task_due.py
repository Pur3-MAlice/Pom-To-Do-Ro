# Generated by Django 3.2.23 on 2023-12-05 19:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='due_date',
            new_name='due',
        ),
    ]
