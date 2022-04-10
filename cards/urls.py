from django.urls import path
from cards import views

urlpatterns = [
    path('learn/<int:pack_id>', views.view_pack),
    # path('create/<pack_id>', views.create_pack),
    # path('edit/<int:pack_id>', views.edit_pack),
    # path('delete/<int:pack_id>', views.delete_pack),
]
