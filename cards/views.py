from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Pack, Flashcard
from django.db.models import Count


# Create your views here.
def index(request):
    packs = Pack.objects.annotate(rating=Count('likes')).order_by('-rating', '-id')[:9]
    return render(request, "index.html", context={'packs': packs})


def view_pack(request, pack_id):
    pack = Pack.objects.get(id=pack_id)
    cards = Flashcard.objects.filter(pack_id=pack_id)
    return render(request, 'cards/wheel.html', context={'pack': pack, 'cards': cards})


def edit_pack(request, pack_id):
    ...


def delete_pack(request, pack_id):
    ...


def create_pack(request):
    ...
