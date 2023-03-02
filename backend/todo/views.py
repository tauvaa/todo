from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from todo.models import Todo
from todo.serializers import TodoSeralizer

# Create your views here.

@api_view(["GET", "POST", "DELETE", "PUT"])
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

    if request.method == "DELETE" and pk is not None:
        print("delete")
        data = Todo.objects.get(pk=pk)
        print(data)
        data.delete()
        return HttpResponse(status=204)

    if request.method == "PUT" and pk is not None:
        print("putting")
        print("pk: ", pk)

        data_object = Todo.objects.get(pk=pk)
        serializer = TodoSeralizer(data_object, data=request.data)
        if serializer.is_valid():
            serializer.save()

        return JsonResponse({"data": serializer.data}, status=200)
