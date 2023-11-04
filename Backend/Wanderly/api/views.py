from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from rest_framework import status, generics
from .serializers import *
import json

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

class PlacesToVisitByCity(generics.ListAPIView):
    serializer_class = PlacesToVisitSerializer

    def get_queryset(self):
        city_id = self.kwargs.get('city_id')
        return Places.objects.filter(city=city_id)

class AddToCartView(APIView):
    def post(self, request):
        serializer = AddToCartSerializer(data = request.data)
        if (serializer.is_valid()):
            cityID = serializer.validated_data['cityID']
            addType = serializer.validated_data['addType']
            user = serializer.validated_data['user']
            TypeID = serializer.validated_data['TypeID']
            cart, created = Cart.objects.get_or_create(user=user)
            jsonDec = json.decoder.JSONDecoder()
            itinerary = jsonDec.decode(cart.itinerary)
            if cityID not in itinerary.keys():
                itinerary[cityID] = {}
            if addType not in itinerary[cityID].keys():
                itinerary[cityID][addType] = []
            if TypeID not in itinerary[cityID][addType]:
                itinerary[cityID][addType].append(TypeID)
            itinerary = json.dumps(itinerary)
            updateditinerary = {
                "user" : user,
                "itinerary" : itinerary,
            }
            serializer = CartSerializer(cart, updateditinerary)
            if (serializer.is_valid()):
                self.perform_update(serializer)
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CuisineByCity(generics.ListAPIView):
    serializer_class = CuisineSerializer

    def get_queryset(self):
        city_id = self.kwargs.get('city_id')
        return Cuisine.objects.filter(city=city_id)
