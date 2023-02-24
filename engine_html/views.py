from django.shortcuts import render, redirect, HttpResponse
from .models import Review
from .forms import ReviewForm


def main(request):
    return render(request, 'engine_html/main_catalog.html')


def prices(request):
    return render(request, 'engine_html/price.html')


def reviews(request):
    error = ''
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            error = 'В форме есть ошибки'
            return HttpResponse("Invalid data: ", error)

    form = ReviewForm()
    reviews = Review.objects.order_by('-id')
    return render(
        request, 'engine_html/review.html', {
            'title': 'Страница отзывов',
            'reviews': reviews,
            'form': form,
            'error': error
        })


def gallerys(request):
    return render(request, 'engine_html/gallery.html')


def cont(request):
    return render(request, 'engine_html/contact.html')