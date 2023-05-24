from django.core.mail import send_mail
from django.shortcuts import render
import os

addresses = [
    os.environ.get('EMAIL_HOST_USER'),
    os.environ.get('EMAIL_HOST_PUSH_USER'),
]


# Индивидуальный бенто
def constrEmail_indBent(name, product, phone, date, deliv, bisc_vid, fil_vid,
                        hardPicture, text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Бисквит: {bisc_vid}
- Начинка: {fil_vid}
- Наличие доп. оплаты: {hardPicture}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Бенто
def constrEmail_bent(name, product, phone, date, deliv, hardPicture, text,
                     request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Наличие доп. оплаты: {hardPicture}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Индивидуальный торт
def constrEmail_indTort(name, product, phone, date, deliv, bisTort_vid,
                        filTort_vid, weightTort, text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Бисквит: {bisTort_vid}
- Начинка: {filTort_vid}
- Вес: {weightTort}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Клубничный торт
def constrEmail_RedTort(name, product, phone, date, deliv, weightTort,
                        ganash_vid, text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Вес: {weightTort}
- Вид ганаша: {ganash_vid}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Торт
def constrEmail_Tort(name, product, phone, date, deliv, weightTort, text,
                     request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Вес: {weightTort}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Сет Капкейки
def constrEmail_setCap(name, product, phone, date, deliv, hardPicture,
                       printPicture, capset_vid, capset_fil, hat_cap,
                       bisBent_set, nachBent_set, text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Вид капкейков: {capset_vid}
- Начинка: {capset_fil}
- Шапочки: {hat_cap}
- Бисквит бенто: {bisBent_set}
- Начинка бенто: {nachBent_set}
- Наличие доп. оплаты: {hardPicture}
- Печать картинок на капкейках: {printPicture}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Сет Трайфлы
def constrEmail_setTR(name, product, phone, date, deliv, hardPicture,
                      trset_vid, bisBent_set, nachBent_set, text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Вид трайфлов: {trset_vid}
- Бисквит бенто: {bisBent_set}
- Начинка бенто: {nachBent_set}
- Наличие доп. оплаты: {hardPicture}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Капкейки
def constrEmail_CAP(name, product, phone, date, deliv, printPicture,
                    capset_vid, capset_fil, hat_cap, coll_cap, text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Вид капкейков: {capset_vid}
- Начинка: {capset_fil}
- Шапочки: {hat_cap}
- Кол-во: {coll_cap}
- Печать фото: {printPicture}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


# Трайфлы
def constrEmail_TR(name, product, phone, date, deliv, coll_cap, trset_vid,
                   text, request):
    result_text = f"""Клиент {name} делает заказ!

- Товар: {product} 

- Телефон: {phone}
- Дата приготовления: {date}
- Вид доставки: {deliv}
- Вид трайфлов: {trset_vid}
- Кол-во: {coll_cap}

- Комментарий КЛ: {text}"""

    subject_ms = 'ЗАКАЗ С САЙТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")


def messageKL(name, email, number, text, request):
    result_text = f"""Сообщение от клиента - {name}! 

- Мыло: {email}
- Номер: {number}
- Комментарий КЛ: {text}"""

    subject_ms = 'СООБЩЕНИЕ ОТ КЛИЕНТА'
    try:
        my_email = 'chistohin1@mail.ru'
        send_mail(subject_ms,
                  result_text,
                  my_email,
                  addresses,
                  fail_silently=False)
    except:
        return render(request, "engine_html/error.html")
