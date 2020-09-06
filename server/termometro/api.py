from django.db.models import Q

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
    # queryset = CheckList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CheckListSerializer

    def get_queryset(self, *args, **kargs):
        queryset_list = CheckList.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(deficiencia__icontains=query)
            ).distinct()
        return queryset_list


class EstabelecimentoViewSet(viewsets.ModelViewSet):
    queryset = Estabelecimento.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = EstabelecimentoSerializer
