from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('price', views.prices),
    path('gallery', views.gallerys),
    path('reviews', views.reviews),
    path('cont', views.cont),
]
