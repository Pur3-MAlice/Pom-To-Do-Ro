from django.db.models import Count
from rest_framework import generics, permissions, filters
from pomtodoro_api.permissions import IsOwnerOrReadOnly
from .models import Category
from .serializers import CategorySerializer


class CategoryList(generics.ListCreateAPIView):
    """
    List Category or create a Category if logged in
    The perform_create method associates the Category with the logged in user.
    """
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Category.objects.all().order_by('title')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter
    ]
    search_fields = [
        'owner__username',
        'title', 
        'content'
    ]
    ordering_fields = [
        'title', 
        'owner__username'
    ]



    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a Category and edit or delete it if you own it.
    """
    serializer_class = CategorySerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Category.objects.all()