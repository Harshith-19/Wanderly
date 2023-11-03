from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Cities, Festival
from .serializers import CitySerializer, FestivalSerializer

class PopularAndTrendingCityListView(APIView):
    def get(self, request):
        trending_cities = Cities.objects.filter(is_trending=True)
        popular_cities = Cities.objects.filter(is_popular=True)

        trending_city_data = []

        for city in trending_cities:
            city_data = CitySerializer(city).data
            festivals_data = FestivalSerializer(city.festivals.all(), many=True).data
            city_data['festivals'] = festivals_data
            trending_city_data.append(city_data)

        response_data = {
            'trending': trending_city_data,
            'popular': popular_cities
        }

        return Response(response_data)
