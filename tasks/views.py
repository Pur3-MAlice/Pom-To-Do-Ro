from django.db.models import Count
from rest_framework import generics, permissions, filters
from pomtodoro_api.permissions import IsOwnerOrReadOnly
from .models import Task
from .serializers import TaskSerializer


class TaskList(generics.ListCreateAPIView):
    """
    List tasks or create a task if logged in
    The perform_create method associates the task with the logged in user.
    """
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Task.objects.all()

    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter
    ]
    search_fields = [
        'owner__username',
        'title', 
        'content',
        'category__title'
    ]
    ordering_fields = [
        'title', 
        'owner__username',
        'category'
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a task and edit or delete it if you own it.
    """
    serializer_class = TaskSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Task.objects.all()