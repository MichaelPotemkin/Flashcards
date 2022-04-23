from django.forms import ModelForm
from .models import Pack, Flashcard
from django import forms


class CreatePackForm(ModelForm):
    class Meta:
        model = Pack
        fields = ['title']


class FlashcardForm(ModelForm):
    class Meta:
        model = Flashcard
        fields = ['front_side', 'flip_side']

