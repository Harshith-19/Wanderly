from rest_framework import serializers
from .models import *

class FestivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Festival
        fields = ('id', 'festival', 'date')

class CitySerializer(serializers.ModelSerializer):
    festivals = FestivalSerializer(many=True, read_only=True)  # Use FestivalSerializer for the festivals field

    class Meta:
        model = Cities
        fields = ('id', 'name', 'description', 'popular', 'festivals')

class DetailsSerializer(serializers.Serializer):
    Country = serializers.CharField(max_length = 100)
    month = serializers.IntegerField()
    date = serializers.IntegerField()

class PlacesToVisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = ('name', 'description', 'image')

class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = ('name', 'description', 'image')
    
class AddToCartSerializer(serializers.Serializer):
    user = serializers.CharField(max_length=100)
    cityID = serializers.IntegerField()
    addType = serializers.CharField(max_length=100)
    TypeID = serializers.IntegerField()

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields  = '__all__'