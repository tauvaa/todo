# Generated by Django 4.1.7 on 2023-02-25 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Todo",
            fields=[
                ("to_do_id", models.AutoField(primary_key=True, serialize=False)),
                ("to_do_item", models.TextField()),
                ("to_do_status", models.BooleanField(default=False)),
                ("to_do_timestamp", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
