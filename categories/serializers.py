from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')


    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Category
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'created_at', 'updated_at', 'title', 'content'
        ]