from rest_framework import serializers

from todo.models import Todo


class TodoSeralizer(serializers.Serializer):
    to_do_id = serializers.IntegerField(read_only=True)
    to_do_item = serializers.CharField()

    def create(self, validated_data):
        return Todo.objects.create(**validated_data)
