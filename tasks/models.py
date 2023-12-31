from django.db import models
from django.contrib.auth.models import User
from categories.models import Category


class Task(models.Model):
    """
    Task model, related to 'owner', i.e. a User instance.
    Is the basis of the Task function
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due = models.DateTimeField(blank=True, null=True) 
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    important = models.BooleanField(default=False)
    urgent = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'