from .models import Review
from django.forms import ModelForm, TextInput, Textarea
from django import forms


class ReviewForm(ModelForm):
    class Meta:
        model = Review
        fields = ["name", "text_rev"]
        widgets = {
            "name":
            TextInput(attrs={
                'class': 'rev-f',
                'placeholder': 'Ваше ФИО'
            }),
            "text_rev":
            Textarea(attrs={
                'class': 'rev-f',
                'placeholder': 'Ваш отзыв'
            })
        }
