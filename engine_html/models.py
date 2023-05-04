from django.db import models
from datetime import datetime

MY_DATE_FORMATS = [
    '%d/%m/%Y',
]


class Review(models.Model):
    name = models.CharField("ФИО", max_length=60)
    publication_date = models.DateField(
        default=datetime.today().strftime('%Y-%m-%d'))
    text_rev = models.TextField("Текст отзыва")

    # Для красивого вывода шаблонов
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"


class Feedback(models.Model):
    name = models.CharField(max_length=60)
    phone = models.CharField(max_length=15)
    product = models.TextField()
    date = models.CharField(max_length=15)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'База клиентов'
        verbose_name_plural = 'Клиенты'
