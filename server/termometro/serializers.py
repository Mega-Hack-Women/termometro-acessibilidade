from rest_framework import serializers
from django_filters.rest_framework import FilterSet, filters
from termometro.models import Usuario, Estabelecimento, HistoricoAvaliacao, CheckList, RespostaAvaliacao

# Termometro Serializer


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


class CheckListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckList
        fields = '__all__'


class HistoricoAvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoricoAvaliacao
        fields = '__all__'


class EstabelecimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estabelecimento
        fields = '__all__'


class RespostaAvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RespostaAvaliacao
        fields = '__all__'
