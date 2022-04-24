from django.forms import ModelForm
from .models import Pack, Flashcard
from django import forms


class CreatePackForm(ModelForm):
    class Meta:
        model = Pack
        fields = ['title']


class FlashcardForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.Meta.fields:
            self.fields[field].required = False

    class Meta:
        model = Flashcard
        fields = ('front_side', 'flip_side')