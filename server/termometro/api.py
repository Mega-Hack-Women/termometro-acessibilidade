from termometro.models import Usuario, Historico, CheckList, Estabelecimento 
from rest_framework import viewsets, permissions
from .serializers import UsuarioSerializer, HistoricoSerializer, CheckListSerializer, EstabelecimentoSerializer

# Usuario Viewset
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = UsuarioSerializer

class HistoricoViewSet(viewsets.ModelViewSet):
    queryset = Historico.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = HistoricoSerializer


class CheckListViewSet(viewsets.ModelViewSet):
    queryset = CheckList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CheckListSerializer


class EstabelecimentoViewSet(viewsets.ModelViewSet):
    queryset = Estabelecimento.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = EstabelecimentoSerializer
