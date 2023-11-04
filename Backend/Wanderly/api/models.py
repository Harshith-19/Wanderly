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
    # image = models.ImageField(upload_to='places_to_visit/')

    def is_trending(self, month, day):
        today = datetime.date.today()
        current_year = today.year
        next = datetime.date(current_year, month, day) + datetime.timedelta(days=15)
        previous = datetime.date(current_year, month, day) - datetime.timedelta(days=15)
        trending_festivals = self.festivals.filter(date__range=(previous, next))
        return trending_festivals.exists()

    def __str__(self):
        return self.city

class Places(models.Model):
    city = models.TextField()
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='places_to_visit/')

    def __str__(self):
        return self.name

class Cuisine(models.Model):
    city = models.TextField()
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='cuisine/')

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.CharField(max_length=100)
    itinerary = models.TextField(default='{}')

    def __str__(self):
        return self.user

class Unique(models.Model):
    city = models.TextField()
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='places_to_visit/')

    def __str__(self):
        return self.name

class Trip(models.Model):
    user = models.CharField(max_length=100)
    itinerary = models.TextField()
    Country = models.CharField(max_length=100)

    def __str__(self):
        return self.user


class CitySlang(models.Model):
    city = models.TextField()
    word = models.CharField(max_length=100)
    meaning = models.CharField(max_length=100)
    language = models.CharField(max_length=100)

    def __str__(self):
        return self.word

class PlacesListByActivity(models.Model):
    city = models.TextField()
    activity = models.TextField()
    place_name = models.TextField()
    description = models.TextField()
    address = models.TextField()
    contact = models.TextField()