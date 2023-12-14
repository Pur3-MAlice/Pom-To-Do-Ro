from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Habit

class HabitSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    streak = serializers.IntegerField(read_only=True)
    
    monday = serializers.BooleanField(read_only=True)
    tuesday = serializers.BooleanField(read_only=True)
    wednesday = serializers.BooleanField(read_only=True)
    thursday = serializers.BooleanField(read_only=True)
    friday = serializers.BooleanField(read_only=True)
    saturday = serializers.BooleanField(read_only=True)
    sunday = serializers.BooleanField(read_only=True)

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner


    class Meta:
        model = Habit
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'created_at', 'updated_at', 'title', 'streak', 
            'checkboxes_reset_at', 'monday', 'tuesday', 'wednesday', 
            'thursday', 'friday', 'saturday', 'sunday',
        ]
