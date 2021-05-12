from django.contrib import admin
from .models import *

class ProductImageTabularInline(admin.TabularInline):
    model = ProductImage
    fields = ['image','image_tag','display']
    readonly_fields = ['image_tag']
    
class ProductImageAdmin(admin.ModelAdmin):
    model = ProductImage
    fields = ['image_tag']
    readonly_fields = ['image_tag']
    
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageTabularInline]
    list_display = ("display_name","landing_page")
    model = Product

    def display_name(self,obj):
        return str(obj.subcategory) + '-' + obj.name

admin.site.register(Category)
admin.site.register(Subcategory)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage, ProductImageAdmin)
