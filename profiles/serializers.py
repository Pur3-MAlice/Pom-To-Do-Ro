from rest_framework import serializers
from .models import Profile
from tasks.models import Task
from habits.models import Habit
from categories.models import Category

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    category_title = serializers.SerializerMethodField()
    task_title = serializers.SerializerMethodField()
    habit_title = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_category_title(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            categories = Category.objects.filter(owner=obj.owner)
            return [category.title for category in categories]
        
    def get_task_title(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            tasks = Task.objects.filter(owner=obj.owner)
            return [task.title for task in tasks]
    
    def get_habit_title(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            habits = Habit.objects.filter(owner=obj.owner)
            return [habit.title for habit in habits]

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'is_owner', 'name',
            'created_at', 'updated_at', 'category_title',
            'task_title', 'habit_title',
            ]
