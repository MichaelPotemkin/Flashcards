from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


# Create your views here.
def index(request):
    return render(request, "index.html")


def learn(request, pack_id):
    pack = ...
    return render(request, 'cards/wheel.html', context={'pack': pack})


def edit_pack(request, pack_id):
    return HttpResponseRedirect(f'/cards/learn/{pack_id}')
