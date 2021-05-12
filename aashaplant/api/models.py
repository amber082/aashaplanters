from django.db import models
from django.utils.html import mark_safe

class Category(models.Model):
    name = models.CharField(max_length=256)
    
    def __str__(self):
        return self.name
        
    class Meta:
        verbose_name_plural = "Categories"
        
class Subcategory(models.Model):
    name = models.CharField(max_length=256)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.category.name + '-' + self.name
        
    class Meta:
        verbose_name_plural = "Subcategories"
        
class Product(models.Model):
    name = models.CharField(max_length=256)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    subcategory = models.ForeignKey('Subcategory', on_delete=models.CASCADE)
    landing_page = models.BooleanField(default=False)
    
    def __str__(self):
        return str(self.subcategory) + '-' + self.name
        
class ProductImage(models.Model):
    image = models.ImageField(upload_to='product')
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    display = models.BooleanField()
    
    def image_tag(self):
        return mark_safe('<img src="/media/%s" width="100" height="100" />' % (self.image))
        
    image_tag.short_description = 'Image'
    
