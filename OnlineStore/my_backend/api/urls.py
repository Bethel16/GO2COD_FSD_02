from django.conf import settings
from django.conf.urls.static import static
from .views import ProductList , ProductDetailView , login_view
from django.urls import path


urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
        path('products/<int:id>/', ProductDetailView.as_view(), name='product-detail'),
            path('login/', login_view, name='login'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
