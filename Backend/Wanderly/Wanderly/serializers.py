from rest_framework import serializers
from .models import Festival, Cities

class FestivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Festival
        fields = ('id', 'name', 'date')

class CitySerializer(serializers.ModelSerializer):
    festivals = FestivalSerializer(many=True, read_only=True)  # Use FestivalSerializer for the festivals field

    class Meta:
        model = Cities
        fields = ('id', 'name', 'description', 'is_popular', 'festivals')
