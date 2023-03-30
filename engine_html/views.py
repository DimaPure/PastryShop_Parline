from django.shortcuts import render, redirect, HttpResponse
from django.core.mail import send_mail
from .models import Review
from .forms import ReviewForm
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse


@csrf_protect
def main(request):
    name = request.POST.get('name', None)
    phone = request.POST.get('phone', None)
    date = request.POST.get('date', None)
    deliv = request.POST.get('deliv', None)
    product = request.POST.get('product', None)
    text = request.POST.get('text', None)
    # Для бенто
    hardPicture = request.POST.get('hardPicture', None)
    bisc_vid = request.POST.get('bisc_vid', None)
    fil_vid = request.POST.get('fil_vid', None)
    # Для тортов
    weightTort = request.POST.get('weightTort', None)
    bisTort_vid = request.POST.get('bisTort_vid', None)
    filTort_vid = request.POST.get('filTort_vid', None)
    ganash_vid = request.POST.get('ganash_vid', None)

    if name:
        # Any process that you want
        data = {
            'answer': 'oke',
        }
        print(name, phone, date, deliv, product, hardPicture, text, bisc_vid,
              fil_vid, weightTort, bisTort_vid, filTort_vid, ganash_vid)
        return JsonResponse(data)

    # my_email = "chistohin1@mail.ru"
    # try:
    #     send_mail(name,
    #               phone,
    #               date,
    #               text,
    #               my_email, [
    #                   'chistohin1@mail.ru',
    #               ],
    #               fail_silently=False)
    #     return render(request, "engine_html/main_catalog.html",
    #                   {'name_ms': name})
    # except:
    #     war = "Ваш заказ не оформлен, сделайте заказ по телефону ......, извините за временные неудобства!"
    #     return render(request, "engine_html/main_catalog.html",
    #                   {'warning': war})
    else:
        return render(request, "engine_html/main_catalog.html", {})


def prices(request):
    return render(request, 'engine_html/price.html')


def gallerys(request):
    return render(request, 'engine_html/gallery.html')


def cont(request):
    return render(request, 'engine_html/contact.html')


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