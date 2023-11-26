from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from datetime import timedelta

class Habit(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    last_completed = models.DateField(null=True, blank=True)
    streak = models.IntegerField(default=0)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'

# def current_streak(habit):
#     total_streak = 0
#     current_streak = 0
#     today = datetime.date.today()
#     compareDate = today + datetime.timedelta(1)
#     entry_dates = list(Entry.objects.values("date").filter(habit=habit, date__lte = today).order_by("-date"))

#     for date in entry_dates:
#         delta = compareDate - date
#         if delta.days == 1: 
#             current_streak += 1
#         elif delta.days == 0: 
#             pass
#         else: 
#             break
#         compareDate = date

#     if current_streak > total_streak:
#         total_streak = current_streak

#     return total_streak