"""Wanderly URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from api.views import *
from api.root import api_root
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", api_root),
    path('admin/', admin.site.urls),
    path('api/pt-cities/', PopularAndTrendingCityListView.as_view(), name='popular-and-trending-cities'),
    path('api/places-to-visit/<str:city_id>/', PlacesToVisitByCity.as_view(), name='places-to-visit-list'),
    path('api/cuisine/<str:city_id>/', CuisineByCity.as_view(), name='cuisine-list'),
    path('api/unique/<str:city_id>/', UniqueByCity.as_view(), name='unique-list'),
    path('api/places-by-activity/<str:city_id>/<str:activity>/', GetPlacesListByActivity.as_view(), name='places-by-activity'),
    path('api/slangs/<str:city_id>/', ListSlangByCity.as_view(), name='city-slangs'),
    path('api/add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),
    path('api/submit-cart/', SubmitCartView.as_view(), name='submit-cart'),
    path('api/view-trip/<int:TripID>/', ViewTripView.as_view(), name='trip-view'),
    path('api/list-trip/<str:user>/', ListTripView.as_view(), name='trip-list'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)