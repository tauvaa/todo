from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from todo.models import Todo
from todo.serializers import TodoSeralizer

# Create your views here.


@csrf_exempt
def to_do(request, pk=None):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = TodoSeralizer(data=data)
        serializer.is_valid()
        serializer.save()
        return JsonResponse(serializer.data, status=201)

    if request.method == "GET":
        print("hello world")
        data = Todo.objects.all().order_by("to_do_id")
        data = TodoSeralizer(data, many=True)
        return JsonResponse({"data": data.data}, status=200)

    if request.method == "DELETE":
        print("delete")
        data = Todo.objects.get(pk=pk)
        print(data)
        data.delete()
        return HttpResponse(status=204)
