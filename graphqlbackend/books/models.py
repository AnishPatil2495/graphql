from django.db import models


# Create your models here.
class Books(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    auther = models.CharField(max_length=50)
    price = models.IntegerField()
    availability = models.BooleanField()
    introduction = models.CharField(max_length=400)
