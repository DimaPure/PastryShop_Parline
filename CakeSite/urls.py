from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('engine_html.urls')),
    path('price', include('engine_html.urls')),
    path('gallery', include('engine_html.urls')),
    path('reviews', include('engine_html.urls')),
    path('cont', include('engine_html.urls')),
    path('error', include('engine_html.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
