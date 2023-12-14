# Generated by Django 3.2.23 on 2023-12-14 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('habits', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='habit',
            name='checkboxes_reset_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='habit',
            name='friday',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='habit',
            name='monday',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='habit',
            name='saturday',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='habit',
            name='sunday',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='habit',
            name='thursday',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='habit',
            name='tuesday',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='habit',
            name='wednesday',
            field=models.BooleanField(default=False),
        ),
    ]