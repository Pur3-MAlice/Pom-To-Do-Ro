from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Task
from categories.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']

class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    due = serializers.DateTimeField(allow_null=True, required=False, format="%b %d, %Y %H:%M")
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    urgent = serializers.BooleanField()
    important = serializers.BooleanField()
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Task
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'created_at', 'updated_at', 'title', 'content',
            'due','urgent', 'important', 'category',
        ]
