from django.db import models
from django.contrib.auth.models import User


class Pack(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, name='author')
    title = models.CharField(max_length=70, null=False)
    likes = models.ManyToManyField(User, through="Like", related_name='pack_likes')

    def total_likes(self):
        return self.likes.count()

    def __str__(self):
        return self.title


class Flashcard(models.Model):
    pack = models.ForeignKey(Pack, on_delete=models.CASCADE)
    front_side = models.CharField(max_length=100)
    flip_side = models.CharField(max_length=100)

    def __str__(self):
        return self.front_side


class Like(models.Model):
    pack = models.ForeignKey(Pack, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'pack'),)
