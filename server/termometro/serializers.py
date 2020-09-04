from rest_framework import serializers
from termometro.models import Usuario

# Termometro Serializer
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'