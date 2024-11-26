from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
from .serializers import ProductSerializer

class ProductDetailView(APIView):
    def get(self, request, id):
        # Fetch the product by ID, or return a 404 if not found
        product = get_object_or_404(Product, pk=id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


@csrf_exempt  # Temporarily disable CSRF for debugging
def login_view(request):
    if request.method == 'POST':
        import json
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('email')
        password = data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({
                'message': 'Login successful',
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name
            })
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    return JsonResponse({'error': 'Invalid method'}, status=405)

