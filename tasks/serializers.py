from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    due_date = serializers.DateTimeField(allow_null=True, required=False)
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    urgent = serializers.BooleanField()
    important = serializers.BooleanField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Task
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'created_at', 'updated_at', 'title', 'content',
            'due_date','urgent', 'important', 'category',
        ]