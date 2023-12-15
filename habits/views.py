from rest_framework import generics, permissions, filters
from rest_framework.response import Response
from django.db.models import Count
from pomtodoro_api.permissions import IsOwnerOrReadOnly
from .models import Habit
from .serializers import HabitSerializer

class HabitList(generics.ListCreateAPIView):
    serializer_class = HabitSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Habit.objects.all().order_by('title')
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
        try:
            habit = serializer.save(owner=self.request.user)
            habit.reset_checkboxes()
            habit.save()
        except Exception as e:
            print(f"Error creating habit: {e}")

class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a Habit and edit or delete it if you own it.
    """
    serializer_class = HabitSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Habit.objects.all()