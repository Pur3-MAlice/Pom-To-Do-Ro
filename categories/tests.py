from django.contrib.auth.models import User
from .models import Category
from rest_framework import status
from rest_framework.test import APITestCase


class CategoryListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='susan', password='pass')

    def test_logged_in_user_can_create_category(self):
        self.client.login(username='susan', password='pass')
        response = self.client.post('/categories/', {'title': 'a title'})
        count = Category.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    

    def test_user_not_logged_in_cant_create_task(self):
        response = self.client.post('/categories/', {'title': 'a title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

class CategoryDetailViewTests(APITestCase):
    def setUp(self):
        susan = User.objects.create_user(username='susan', password='pass')
        brian = User.objects.create_user(username='brian', password='pass')
        Category.objects.create(
            owner=susan, title='a title'
        )
        Category.objects.create(
            owner=brian, title='another title'
        )

    def test_can_retrieve_category_using_valid_id(self):
        response = self.client.get('/categories/1/')
        self.assertEqual(response.data['title'], 'a title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_category_using_invalid_id(self):
        response = self.client.get('/categories/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_can_update_own_category(self):
        self.client.login(username='susan', password='pass')
        response = self.client.put('/categories/1/', {'title': 'a new title', 'completed': 'False'})
        category = Category.objects.filter(pk=1).first()
        self.assertEqual(category.title, 'a new title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_cant_update_another_users_category(self):
        self.client.login(username='susan', password='pass')
        response = self.client.put('/categories/2/', {'title': 'a new title', 'completed': 'True'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
