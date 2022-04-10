from django.db import models
from django.contrib.auth.models import User


class Pack(models.Model):
    author_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=70, null=False)
    description = models.CharField(max_length=300, null=True)
    likes = models.ManyToManyField(User, through="Like", related_name='pack_likes')


class Flashcard(models.Model):
    pack_id = models.ForeignKey(Pack, on_delete=models.CASCADE)
    front_side = models.CharField(max_length=100)
    flip_side = models.CharField(max_length=100)


class Like(models.Model):
    pack_id = models.ForeignKey(Pack, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user_id', 'pack_id'),)
