from rest_framework import generics, permissions, filters
from django.db.models import Count
from pomtodoro_api.permissions import IsOwnerOrReadOnly
from .models import Habit
from .serializers import HabitSerializer


class HabitList(generics.ListCreateAPIView):
    """
    List Habits or create a Habit if logged in
    The perform_create method associates the Habit with the logged in user.
    """
    serializer_class = HabitSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Habit.objects.all().order_by('title')
    serializer_class = HabitSerializer
    filter_backends = [
        filters.OrderingFilter, 
        filters.SearchFilter
    ]
    search_fields = [
        'owner__username',
        'title',
    ]
    ordering_fields = [
        'title',
        'owner__username'
        ] 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a Habit and edit or delete it if you own it.
    """
    serializer_class = HabitSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Habit.objects.all()