import json
from django.shortcuts import render, redirect, HttpResponse
from django.core.mail import send_mail
from .models import Review
from .forms import ReviewForm
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse, HttpResponseBadRequest
from engine_html.pushEmFunc import *
from flask import request


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
    # Наборы, капкейки и трайфлы
    capset_vid = request.POST.get('capset_vid', None)
    capset_fil = request.POST.get('capset_fil', None)
    hat_cap = request.POST.get('hat_cap', None)
    coll_cap = request.POST.get('coll_cap', None)
    bisBent_set = request.POST.get('bisBent_set', None)
    nachBent_set = request.POST.get('nachBent_set', None)
    printPicture = request.POST.get('printPicture', None)

    trset_vid = request.POST.get('trset_vid', None)

    if request.method == "POST":
        if 'ИНДИВИДУАЛЬНЫЙ бенто' in product:
            constrEmail_indBent(name, product, phone, date, deliv, bisc_vid,
                                fil_vid, hardPicture, text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'бенто' in product:
            constrEmail_bent(name, product, phone, date, deliv, hardPicture,
                             text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'ИНДИВИДУАЛЬНЫЙ торт' in product:
            constrEmail_indTort(name, product, phone, date, deliv, bisTort_vid,
                                filTort_vid, weightTort, text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'КЛУБНИЧНЫЙ ЙОГУРТ' in product:
            constrEmail_RedTort(name, product, phone, date, deliv, weightTort,
                                ganash_vid, text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'торт' in product:
            constrEmail_Tort(name, product, phone, date, deliv, weightTort,
                             text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'КАПКЕЙКА' in product:
            constrEmail_setCap(name, product, phone, date, deliv, hardPicture,
                               printPicture, capset_vid, capset_fil, hat_cap,
                               bisBent_set, nachBent_set, text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'ТРАЙФЛА' in product:
            constrEmail_setTR(name, product, phone, date, deliv, hardPicture,
                              trset_vid, bisBent_set, nachBent_set, text,
                              request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'КАПКЕЙКИ' in product:
            constrEmail_CAP(name, product, phone, date, deliv, printPicture,
                            capset_vid, capset_fil, hat_cap, coll_cap, text,
                            request)
            data = {'answer': 'oke'}
            return JsonResponse(data)
        elif 'ТРАЙФЛЫ' in product:
            constrEmail_TR(name, product, phone, date, deliv, coll_cap,
                           trset_vid, text, request)
            data = {'answer': 'oke'}
            return JsonResponse(data)

    else:
        return render(request, "engine_html/main_catalog.html", {})


def prices(request):
    return render(request, 'engine_html/price.html')


def gallerys(request):
    return render(request, 'engine_html/gallery.html')


@csrf_protect
def cont(request):
    if request.method == 'POST':
        print("Поймали пост")
        name_с = request.POST.get('name', None)
        email_с = request.POST.get('email', None)
        number_с = request.POST.get('number', None)
        text_с = request.POST.get('text', None)

        print(name_с, email_с, number_с, text_с)
        messageKL(name_с, email_с, number_с, text_с, request)

        data = {'answer': 'oke'}
        return JsonResponse(data)
    else:
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


def error(request):
    return render(request, 'engine_html/error.html')