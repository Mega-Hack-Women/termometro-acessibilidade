# Generated by Django 3.1.1 on 2020-09-07 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CheckList',
            fields=[
                ('checklist_id', models.AutoField(primary_key=True, serialize=False)),
                ('detalhe_checklist', models.CharField(max_length=500)),
                ('deficiencia', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Estabelecimento',
            fields=[
                ('prestador_id', models.AutoField(primary_key=True, serialize=False)),
                ('nome_prestador', models.CharField(max_length=150)),
                ('descricao', models.CharField(max_length=500)),
                ('site', models.CharField(max_length=150)),
                ('hora_funcionamento', models.CharField(max_length=50)),
                ('dias_funcionamento', models.CharField(max_length=100)),
                ('categoria', models.CharField(max_length=100)),
                ('especialidade', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=800)),
            ],
        ),
        migrations.CreateModel(
            name='HistoricoAvaliacao',
            fields=[
                ('historico_avaliacao_id', models.AutoField(primary_key=True, serialize=False)),
                ('usuario_id', models.IntegerField()),
                ('prestador_id', models.IntegerField()),
                ('checklist_id', models.IntegerField()),
                ('deficiencia', models.CharField(max_length=100)),
                ('avaliacao', models.IntegerField()),
                ('cadastrado_em', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('usuario_id', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=150, unique=True)),
                ('data_nascimento', models.DateField()),
                ('deficiencia', models.CharField(max_length=100)),
                ('cadastrado_em', models.DateTimeField(auto_now_add=True)),
                ('imagem', models.CharField(max_length=800)),
            ],
        ),
    ]
