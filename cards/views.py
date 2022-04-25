from django.db.models import Count
from django.http import HttpResponseRedirect, HttpResponseForbidden
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from .models import Pack, Flashcard, Like, User
from .forms import CreatePackForm, FlashcardForm
from django.forms import modelformset_factory
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


# Create your views here.
def index(request):
    packs = Pack.objects.annotate(rating=Count('likes')).order_by('-rating', '-id')[:9]
    return render(request, "index.html", context={'packs': packs})


def view_pack(request, pack_id):
    pack = get_object_or_404(Pack, id=pack_id)
    cards = Flashcard.objects.filter(pack_id=pack_id)
    return render(request, 'cards/wheel.html',
                  context={'pack': pack, 'cards': cards})


@login_required
def edit_pack(request, pack_id):
    FlashcardFormSet = modelformset_factory(Flashcard, form=FlashcardForm, extra=0, max_num=100,
                                            fields=['front_side', 'flip_side'])
    pack = get_object_or_404(Pack, id=pack_id)
    if request.user == pack.author:
        if request.method == 'POST':
            formset = FlashcardFormSet(request.POST, queryset=Flashcard.objects.filter(pack=pack))

            if formset.is_valid():
                for form in formset:
                    card = form.save(commit=False)
                    if card.front_side and card.flip_side:
                        card.pack = pack
                        card.save()
                    else:
                        if Flashcard.objects.filter(id=card.id):
                            card.delete()
                return redirect('learn', pack_id=pack_id)
            else:
                return render(request, 'cards/edit.html',
                              context={'pack': pack, 'formset': formset})
        else:
            formset = FlashcardFormSet(queryset=Flashcard.objects.filter(pack=pack))

        return render(request, 'cards/edit.html', context={'pack': pack, 'formset': formset})

    else:
        return HttpResponseForbidden


@login_required
def delete_pack(request, pack_id):
    pack = get_object_or_404(Pack, id=pack_id)
    if request.user == pack.author:
        pack.delete()

    return redirect(request.META.get("HTTP_REFERER"))


@login_required
def create_pack(request):
    if request.method == 'POST':
        form = CreatePackForm(request.POST)
        if form.is_valid():
            pack = form.save(commit=False)
            pack.author = request.user
            pack.save()
            return redirect('edit', pack_id=pack.id)
    else:
        form = CreatePackForm()

    return render(request, 'cards/create.html', context={'form': form})


@login_required
def like_pack(request, pk):
    pack = get_object_or_404(Pack, id=pk)
    like, created = Like.objects.get_or_create(pack=pack, user=request.user)
    if not created:
        like.delete()

    return HttpResponseRedirect(reverse('learn', args=[str(pk)]))


def view_user_profile(request, user_id):
    profile_owner = get_object_or_404(User, id=user_id)
    packs = Pack.objects.filter(author=profile_owner).annotate(rating=Count('likes')).order_by('-rating')

    paginator = Paginator(packs, 9)
    page = request.GET.get('page')

    try:
        packs = paginator.page(page)
    except PageNotAnInteger:
        packs = paginator.page(1)
    except EmptyPage:
        packs = paginator.page(paginator.num_pages)

    context = {
        "profile_owner": profile_owner,
        'packs': packs
    }

    return render(request, "cards/profile.html", context)


def search(request):
    packs_list = Pack.objects.all().annotate(rating=Count('likes')).order_by('-rating')
    query = request.GET.get('q')

    if query:
        packs_list = Pack.objects.filter(title__icontains=query).annotate(rating=Count('likes')).order_by('-rating')

    paginator = Paginator(packs_list, 9)
    page = request.GET.get('page')

    try:
        packs = paginator.page(page)
    except PageNotAnInteger:
        packs = paginator.page(1)
    except EmptyPage:
        packs = paginator.page(paginator.num_pages)

    context = {
        'packs': packs
    }
    return render(request, 'cards/search.html', context)
