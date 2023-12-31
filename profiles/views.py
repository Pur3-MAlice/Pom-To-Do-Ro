from django.db.models import Count
from rest_framework import generics, filters
from pomtodoro_api.permissions import IsOwnerOrReadOnly
from .models import Profile
from .serializers import ProfileSerializer


class ProfileList(generics.ListAPIView):
    """
    List all profiles.
    No create view as profile creation is handled by django signals.
    """
    queryset = Profile.objects.annotate(
        tasks_count=Count('owner__task', distinct=True),
        habits_count=Count('owner__habit', distinct=True),
        categories_count=Count('owner__category', distinct=True),
    ).order_by('-created_at')
    serializer_class = ProfileSerializer
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter
    ]
    search_fields = [
        'owner__username',
    ]
    ordering_fields = [
        'tasks_count', 'habits_count', 'categories_count'
    ]


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update a profile if you're the owner.
    """
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.annotate(
        tasks_count=Count('owner__task', distinct=True),
        habits_count=Count('owner__habit', distinct=True),
        categories_count=Count('owner__category', distinct=True),
    ).order_by('-created_at')
    serializer_class = ProfileSerializer