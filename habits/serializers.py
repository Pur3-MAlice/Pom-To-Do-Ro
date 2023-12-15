from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Habit

class HabitSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    
    monday = serializers.BooleanField(read_only=False)
    tuesday = serializers.BooleanField(read_only=False)
    wednesday = serializers.BooleanField(read_only=False)
    thursday = serializers.BooleanField(read_only=False)
    friday = serializers.BooleanField(read_only=False)
    saturday = serializers.BooleanField(read_only=False)
    sunday = serializers.BooleanField(read_only=False)

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner


    class Meta:
        model = Habit
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'created_at', 'updated_at', 'title',
            'checkboxes_reset_at', 'monday', 'tuesday', 'wednesday', 
            'thursday', 'friday', 'saturday', 'sunday',
        ]
