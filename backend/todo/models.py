from django.db import models

# Create your models here.


class Todo(models.Model):
    to_do_id = models.AutoField(primary_key=True)
    to_do_item = models.TextField()
    to_do_status = models.BooleanField(default=False)
    to_do_timestamp = models.DateTimeField(auto_now=True)
