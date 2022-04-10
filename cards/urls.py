from django.urls import path
from cards import views

urlpatterns = [
    path('learn/<int:pack_id>', views.learn),
    path('edit/<int:pack_id>', views.edit_pack)
]
