from django.urls import path

from todo import views

urlpatterns = [path("todo/", views.to_do), path("todo/<int:pk>/", views.to_do)]
