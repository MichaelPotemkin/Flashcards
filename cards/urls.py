from django.urls import path
from cards import views

urlpatterns = [
    path('pack/<int:pack_id>', views.pack)
]
