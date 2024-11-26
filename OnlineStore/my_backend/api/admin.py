# Register your models here.
from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'discounted_price', 'stock', 'availability')
    list_filter = ('category', 'availability')
    search_fields = ('name', 'category')
