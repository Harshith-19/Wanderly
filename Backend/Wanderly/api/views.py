from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from rest_framework import status, generics
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
import json

class PopularAndTrendingCityListView(APIView):
    @csrf_exempt
    def post(self, request):
        serializer = DetailsSerializer(data=request.data)
        if (serializer.is_valid()):
            query_set = Cities.objects.filter(country=serializer.validated_data['Country'])
            popular_cities = query_set.filter(popular=True)
            popserializer = CitySerializer(popular_cities, many=True)
            trending_cities = []
            for city in query_set:
                month = serializer.validated_data['month']
                date = serializer.validated_data['date']
                if (city.is_trending(month, date)):
                    city_data = CitySerializer(city).data
                    festivals_data = FestivalSerializer(city.festivals.all(), many=True).data
                    city_data['festivals'] = festivals_data
                    trending_cities.append(city_data)
            response_data = {
                'trending': trending_cities,
                'popular': popserializer.data
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
    @csrf_exempt
    def post(self, request):
        serializer = AddToCartSerializer(data = request.data)
        if (serializer.is_valid()):
            cityID = str(serializer.validated_data['cityID'])
            addType = serializer.validated_data['addType']
            user = serializer.validated_data['user']
            TypeID = str(serializer.validated_data['TypeID'])
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
                serializer.save()
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

class UniqueByCity(generics.ListAPIView):
    serializer_class = UniqueSerializer

    def get_queryset(self):
        city_id = self.kwargs.get('city_id')
        return Unique.objects.filter(city=city_id)

class ListSlangByCity(generics.ListAPIView):
    serializer_class = CitySlangSerializer
    def get_queryset(self):
        city_id = self.kwargs.get('city_id')
        return CitySlang.objects.filter(city=city_id)

class SubmitCartView(APIView):
    @csrf_exempt
    def post(self, request):
        serializer = SubmitCartSerializer(data=request.data)
        if (serializer.is_valid()):
            user = serializer.validated_data['user']
            cart = Cart.objects.get(user=user)
            if (cart is not None):
                jsonDec = json.decoder.JSONDecoder()
                itinerary = jsonDec.decode(cart.itinerary)
                cityList = list(itinerary.keys())
                cityID = int(cityList[0])
                country = Cities.objects.get(pk=cityID).country
                trip_data = {
                    "user" : user,
                    "itinerary" : cart.itinerary,
                    "Country" : country,
                }
                tserializer = TripSerializer(data=trip_data)
                if (tserializer.is_valid()):
                    tserializer.save()
                    cart.delete()
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(tserializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ViewTripView(APIView):
    def get(self, request, *args, **kwargs):
        tripID = self.kwargs.get('TripID')
        trip = Trip.objects.get(pk=tripID)
        tripDetails = {}
        jsonDec = json.decoder.JSONDecoder()
        itinerary = jsonDec.decode(trip.itinerary)
        for i in itinerary.keys():
            city = Cities.objects.get(pk=int(i)).city
            tripDetails[city] = {}
            for j in itinerary[i].keys():
                tripDetails[city][j] = []
                for k in itinerary[i][j]:
                    if (j == 'Places'):
                        details = Places.objects.get(pk=int(k))
                        serializer = PlacesToVisitSerializer(details)
                        tripDetails[city][j].append(serializer.data)
                    elif (j == 'Cuisine'):
                        details = Cuisine.objects.get(pk=int(k))
                        serializer = CuisineSerializer(details)
                        tripDetails[city][j].append(serializer.data)
                    elif (j == 'Unique'):
                        details = Unique.objects.get(pk=int(k))
                        serializer = UniqueSerializer(details)
                        tripDetails[city][j].append(serializer.data)
        return Response(tripDetails, status=status.HTTP_200_OK)

class GetPlacesListByActivity(generics.ListAPIView):
    serializer_class = PlacesListByActivitySerializer

    def get_queryset(self):
        city_id = self.kwargs.get('city_id')
        activity = self.kwargs.get('activity')
        response = PlacesListByActivity.objects.filter(city=city_id)
        return response

class ListTripView(APIView):
    def get(self, request, *args, **kwargs):
        user = self.kwargs.get('user')
        trips = Trip.objects.filter(user=user)
        tripList = []
        for i in trips:
            tripDict = {
                "id" : i.id,
                "country" : i.Country,
            }
            tripList.append(tripDict)
        return Response(tripList, status=status.HTTP_200_OK)