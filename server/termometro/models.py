from django.db import models


class Usuario(models.Model):
    usuario_id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=150)
    email = models.EmailField(max_length=150, unique=True)
    data_nascimento = models.DateField()
    deficiencia = models.CharField(max_length=100)
    cadastrado_em = models.DateTimeField(auto_now_add=True)
    imagem = models.CharField(max_length=800)


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
    image = models.CharField(max_length=800)


class RespostaAvaliacao(models.Model):
    resposta_avaliacao_id = models.AutoField(primary_key=True)
    prestador_id = models.IntegerField()
    pergunta_1 = models.CharField(max_length=1)
    pergunta_2 = models.CharField(max_length=1)
    pergunta_3 = models.CharField(max_length=1)
    pergunta_4 = models.CharField(max_length=1)
    pergunta_5 = models.CharField(max_length=1)
    pergunta_6 = models.CharField(max_length=1)
    pergunta_7 = models.CharField(max_length=1)
    pergunta_8 = models.CharField(max_length=1)
    pergunta_9 = models.CharField(max_length=1)
    pergunta_10 = models.CharField(max_length=1)
    pergunta_11 = models.CharField(max_length=1)
    pergunta_12 = models.CharField(max_length=1)
    pergunta_13 = models.CharField(max_length=1)
    pergunta_14 = models.CharField(max_length=1)
    pergunta_15 = models.CharField(max_length=1)
