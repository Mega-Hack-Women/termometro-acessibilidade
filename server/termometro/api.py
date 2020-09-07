from django.db.models import Q

from termometro.models import Usuario, HistoricoAvaliacao, CheckList, Estabelecimento
from rest_framework import viewsets, permissions
from .serializers import UsuarioSerializer, HistoricoAvaliacaoSerializer, CheckListSerializer, EstabelecimentoSerializer

# Usuario Viewset


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = UsuarioSerializer


class HistoricoAvaliacaoViewSet(viewsets.ModelViewSet):
    queryset = HistoricoAvaliacao.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = HistoricoAvaliacaoSerializer

    def get_queryset(self, *args, **kargs):
        queryset_list = HistoricoAvaliacao.objects.all()
        query = self.request.GET.get("prestador")
        if query:
            queryset_list = queryset_list.filter(
                Q(prestador_id__icontains=query)
            ).distinct()
        return queryset_list


class CheckListViewSet(viewsets.ModelViewSet):
    # queryset = CheckList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CheckListSerializer

    def get_queryset(self, *args, **kargs):
        queryset_list = CheckList.objects.all()
        query = self.request.GET.get("deficiencia")
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

    def get_queryset(self, *args, **kargs):
        queryset_list = Estabelecimento.objects.all()
        query = self.request.GET.get("prestador")
        if query:
            queryset_list = queryset_list.filter(
                Q(prestador_id__icontains=query)
            ).distinct()
        return queryset_list
