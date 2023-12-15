from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime, timedelta

class Habit(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=30)
    checkboxes_reset_at = models.DateTimeField(null=True, blank=True)

    # Day of the week checkboxes
    monday = models.BooleanField(default=False)
    tuesday = models.BooleanField(default=False)
    wednesday = models.BooleanField(default=False)
    thursday = models.BooleanField(default=False)
    friday = models.BooleanField(default=False)
    saturday = models.BooleanField(default=False)
    sunday = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'

    def reset_checkboxes(self):
        print("Resetting checkboxes...")
        try:
            now = datetime.now(timezone.utc)
            next_sunday_midnight = now + timedelta(
                days=(6 - now.weekday()) + 1,
                hours=-now.hour,
                minutes=-now.minute,
                seconds=-now.second,
                microseconds=-now.microsecond
            )

            self.checkboxes_reset_at = next_sunday_midnight
            self.monday = self.tuesday = self.wednesday = self.thursday = self.friday = self.saturday = self.sunday = False
        except Exception as e:
            print(f"Error in reset_checkboxes: {e}")