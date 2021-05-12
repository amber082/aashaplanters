from django.urls import path

from . import views

urlpatterns = [
    path('',views.home),
    path('products/',views.viewProduct),
    path('landproducts/',views.viewLandProduct),
    path('detail/',views.productDetail),
    path('category/',views.categoryDetail)
]
