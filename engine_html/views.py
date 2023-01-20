from django.shortcuts import render


def main(request):
    return render(request, 'engine_html/main_catalog.html')


def prices(request):
    return render(request, 'engine_html/price.html')


def reviews(request):
    return render(request, 'engine_html/review.html')


def gallerys(request):
    return render(request, 'engine_html/gallery.html')


def cont(request):
    return render(request, 'engine_html/contact.html')