from os import wait
from rest_framework import serializers

from todo.models import Todo


class TodoSeralizer(serializers.Serializer):
    to_do_id = serializers.IntegerField(read_only=True)
    to_do_item = serializers.CharField()
    to_do_status = serializers.BooleanField(default=False)

    def create(self, validated_data):
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.to_do_item = validated_data.get(
            "to_do_item", instance.to_do_item
        )
        instance.to_do_status = validated_data.get(
            "to_do_status", instance.to_do_status
        )
        instance.save()
        return instance
