from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    """
    Category model, related to 'owner', i.e. a User instance.
    Is the basis of the categories that Users will create
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'