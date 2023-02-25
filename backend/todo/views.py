from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from todo.models import Todo
from todo.serializers import TodoSeralizer

# Create your views here.



@csrf_exempt
def to_do(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = TodoSeralizer(data=data)

        serializer.is_valid()

        serializer.save()
        return JsonResponse(serializer.data, status=201)
