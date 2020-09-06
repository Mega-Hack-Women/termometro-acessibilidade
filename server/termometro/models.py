from django.db import models


class Usuario(models.Model):
    usuario_id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=150)
    email = models.EmailField(max_length=150, unique=True)
    data_nascimento = models.DateField()
    deficiencia = models.CharField(max_length=100)
    cadastrado_em = models.DateTimeField(auto_now_add=True)


class CheckList(models.Model):
    checklist_id = models.AutoField(primary_key=True)
    detalhe_checklist = models.CharField(max_length=500)
    deficiencia = models.CharField(max_length=100)


class HistoricoAvaliacao(models.Model):
    historico_avaliacao_id = models.AutoField(primary_key=True)
    usuario_id = models.IntegerField()
    prestador_id = models.IntegerField()
    checklist_id = models.IntegerField()
    deficiencia = models.CharField(max_length=100)
    avaliacao = models.IntegerField()
    cadastrado_em = models.DateTimeField(auto_now_add=True)


class Estabelecimento(models.Model):
    prestador_id = models.AutoField(primary_key=True)
    nome_prestador = models.CharField(max_length=150)
    descricao = models.CharField(max_length=500)
    site = models.CharField(max_length=150)
    hora_funcionamento = models.CharField(max_length=50)
    dias_funcionamento = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    especialidade = models.CharField(max_length=100)
