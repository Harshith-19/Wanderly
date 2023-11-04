from rest_framework import serializers
from .models import Festival, Cities

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
