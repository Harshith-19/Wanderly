from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Cities, Festival, PlaceToVisit
from rest_framework import status, generics
from .serializers import CitySerializer, FestivalSerializer, DetailsSerializer, PlaceToVisitSerializer

class PopularAndTrendingCityListView(APIView):
    def post(self, request):
        serializer = DetailsSerializer(data=request.data)
        if (serializer.is_valid()):
            query_set = Cities.objects.filter(country=serializer.validated_data['Country'])
            popular_cities = query_set.filter(popular=True)
            trending_cities = []
            for city in query_set:
                if (city.is_trending(serializer.validated_data['month'], serializer.validated_data['date'])):
                    city_data = CitySerializer(city).data
                    festivals_data = FestivalSerializer(city.festivals.all(), many=True).data
                    city_data['festivals'] = festivals_data
                    trending_cities.append(city_data)
            response_data = {
                'trending': trending_cities,
                'popular': popular_cities
            }
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlacesToVisitList(generics.ListAPIView):
    serializer_class = PlaceToVisitSerializer

    def get_queryset(self):
        city_id = self.kwargs.get('city_id')
        return PlaceToVisit.objects.filter(city_id=city_id)