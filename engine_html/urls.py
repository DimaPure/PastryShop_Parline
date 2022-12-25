from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('price', views.prices),
    path('gallerys', views.gallerys),
    path('reviews', views.reviews),
    path('people', views.people)
]
