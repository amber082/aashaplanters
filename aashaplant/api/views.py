from django.shortcuts import render, HttpResponse
from django.http import HttpResponseNotFound
from .models import Product, ProductImage, Category, Subcategory
from django.core import serializers
import json

def home(request):
    return (HttpResponse('<h1>Resticted Access</h1>'))

def viewProduct(request):
    cat = int(request.GET.get('cat'))
    sub = int(request.GET.get('sub'))
    if cat==0:
        products = Product.objects.all()
    else:
        if sub==0:
            products = Product.objects.filter(subcategory__category_id=cat)
        else:
            products = Product.objects.filter(subcategory_id=sub)
    product_list = []
    for product in products:
        try:
            image_src = ProductImage.objects.filter(product=product,display=True)[0].image
        except:
            image_src='Broken Link'
        product_list.append({
            'id':product.id,
            'name':product.name,
            'price':str(product.price),
            'image':'/media/'+str(image_src)
        })
    return HttpResponse(json.dumps(product_list),content_type = 'application/json')

def viewLandProduct(request):
    products = Product.objects.filter(landing_page=True)
    product_list = []
    for product in products:
        try:
            image_src = ProductImage.objects.filter(product=product,display=True)[0].image
        except:
            image_src='Broken Link'
        product_list.append({
            'id':product.id,
            'name':product.name,
            'price':str(product.price),
            'image':'/media/'+str(image_src)
        })
    return HttpResponse(json.dumps(product_list),content_type = 'application/json')

def productDetail(request):
    id = request.GET.get('id')
    try:
        product = Product.objects.get(pk=id)
    except:
        return HttpResponseNotFound('<h1>Page not found</h1>')
    image_list = []
    images = ProductImage.objects.filter(product_id=id)
    for image in images:
        image_list.append('/media/'+str(image.image))
    response = {
        'name':product.name,
        'price':str(product.price),
        'description':product.description,
        'images':image_list
    }
    return HttpResponse(json.dumps(response),content_type = 'application/json')

def categoryDetail(request):
    categories = Category.objects.all()
    category_list = []
    for category in categories:
        subcat_list = []
        subcat_list.append({
            'id':0,
            'name':'All Products'
        })
        subcategories = Subcategory.objects.filter(category=category)
        for subcategory in subcategories:
            subcat_list.append({
                'id':subcategory.id,
                'name':subcategory.name
            })
        category_list.append({
            'id':category.id,
            'name':category.name,
            'subcats':subcat_list
        })
    return HttpResponse(json.dumps(category_list),content_type = 'application/json')
