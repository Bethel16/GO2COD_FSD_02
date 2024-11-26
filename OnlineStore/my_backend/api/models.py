from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)  # Product name
    description = models.TextField()  # Product description
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Original price
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Discounted price
    stock = models.PositiveIntegerField(default=0)  # Stock quantity
    category = models.CharField(max_length=100)  # Category name
    image = models.ImageField(upload_to="product_images/", null=True, blank=True)  # Product image
    tags = models.CharField(max_length=255, null=True, blank=True)  # Tags (e.g., "50% OFF")
    availability = models.BooleanField(default=True)  # True if the product is in stock
    quick_overview = models.TextField(null=True, blank=True)  # Quick overview text
    features = models.JSONField(null=True, blank=True)  # JSON field for features (e.g., ["Free Delivery", "100% Guarantee"])
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp for creation
    updated_at = models.DateTimeField(auto_now=True)  # Timestamp for updates

    def __str__(self):
        return self.name

    def calculate_discount_percentage(self):
        """Calculate and return the discount percentage."""
        if self.discounted_price:
            return int(100 - (self.discounted_price / self.price) * 100)
        return 0
