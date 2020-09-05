from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=150)
    email = models.EmailField(max_length=150, unique=True)
    data_nascimento = models.DateField()
    cadastrado_em = models.DateTimeField(auto_now_add=True)


class CheckList(models.Model):
    detalhe_checklist = models.CharField(max_length=200)
    deficiencia = models.CharField(max_length=100)

    
class Historico(models.Model):
    usuario_id = models.IntegerField()
    pretador_id = models.IntegerField()
    checklist_id = models.IntegerField()
    indicador = models.CharField(max_length=1)
    cadastrado_em = models.DateTimeField(auto_now_add=True)


class Estabelecimento(models.Model):
    prestador_id = models.IntegerField()
    endereço = models.CharField(max_length=200)
