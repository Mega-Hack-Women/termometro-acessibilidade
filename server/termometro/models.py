from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=150)
    email = models.EmailField(max_length=150, unique=True)
    data_nascimento = models.DateField()
    cadastrado_em = models.DateTimeField(auto_now_add=True)
