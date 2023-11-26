from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta

class Habit(models.Model):
    """
    Habit model, related to 'owner', i.e. a User instance.
    Is the basis of the Habit function
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    last_completed_date = models.DateField(null=True, blank=True)
    chain_count = models.IntegerField(default=0)

    def reset_daily_completion(self):
        """
        Reset completed field to False at midnight
        """
        now = timezone.now()
        midnight = now.replace(hour=0, minute=0, second=0, microsecond=0)

        if now == midnight and self.completed:
            self.completed = False
            self.save()

    def complete_habit(self):
        """
        Checks if the habit was completed today/yesterday
        """
        today = timezone.now().date()

        if self.last_completed_date == today:
            return False
        
        yesterday = today - timedelta(days=1)
        self.chain_count = (self.chain_count + 1) if self.last_completed_date == yesterday else 1

        return True
        
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'    