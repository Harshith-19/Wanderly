from django.db import models
import datetime

class Festival(models.Model):
    festival = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return self.festival

class Cities(models.Model):
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    popular = models.BooleanField()
    description = models.TextField()
    festivals = models.ManyToManyField(Festival, blank=True)

    @property
    def is_trending(self):
        today = datetime.date.today()
        next = today + datetime.timedelta(days=15)
        previous = today - datetime.timedelta(days=15)
        trending_festivals = self.festivals.filter(date__range=(previous, next))
        return trending_festivals.exists()

    def __str__(self):
        return self.city