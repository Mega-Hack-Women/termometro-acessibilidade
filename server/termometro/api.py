from termometro.models import Usuario 
from rest_framework import viewsets, permissions
from .serializers import UsuarioSerializer

# Usuario Viewset
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = UsuarioSerializer