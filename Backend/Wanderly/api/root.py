from rest_framework.decorators import api_view, permission_classes
from rest_framework.reverse import reverse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(["GET"])
@permission_classes((AllowAny,))
def api_root(request, format=None):
    return Response(
        {
            "trending-popular-cities": reverse(
                "popular-and-trending-cities", request=request, format=format
            ),
            'places-to-visit': reverse('places-to-visit-list',args=[1], request=request, format=format),
            "cart-addition": reverse(
                "add-to-cart", request=request, format=format
            ),
            "cart-submission": reverse(
                "submit-cart", request=request, format=format
            ),
            "view-trip": reverse(
                "trip-view",args=[1], request=request, format=format
            ),
            "list-trip": reverse(
                "trip-list",args=[1], request=request, format=format
            ),
        }
    )