from django.db.models import Count
from django.http import HttpResponseRedirect, HttpResponseForbidden
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from .models import Pack, Flashcard, Like, User
from django.core.mail import send_mail


# Create your views here.
def index(request):
    packs = Pack.objects.annotate(rating=Count('likes')).order_by('-rating', '-id')[:9]
    return render(request, "index.html", context={'packs': packs})


def view_pack(request, pack_id):
    pack = Pack.objects.get(id=pack_id)
    cards = Flashcard.objects.filter(pack_id=pack_id)
    return render(request, 'cards/wheel.html',
                  context={'pack': pack, 'cards': cards})


def edit_pack(request, pack_id):
    pack = Pack.objects.get(id=pack_id)
    cards = Flashcard.objects.filter(pack_id=pack_id)
    return render(request, 'cards/edit.html', context={'pack': pack, 'cards': cards})


def delete_pack(request, pack_id):
    ...


def create_pack(request):
    ...


def like_pack(request, pk):
    pack = get_object_or_404(Pack, id=request.POST.get('pack_id'))
    like, created = Like.objects.get_or_create(pack=pack, user=request.user)
    if not created:
        like.delete()

    return HttpResponseRedirect(reverse('learn', args=[str(pk)]))


def view_user_profile(request, user_id):
    profile_owner = get_object_or_404(User, id=user_id)
    packs = Pack.objects.filter(author=profile_owner)

    return render(request, "cards/profile.html", context={'profile_owner': profile_owner, 'packs': packs})