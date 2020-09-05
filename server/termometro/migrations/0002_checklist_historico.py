# Generated by Django 3.1.1 on 2020-09-05 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('termometro', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CheckList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detalhe_checklist', models.CharField(max_length=200)),
                ('deficiencia', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Historico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario_id', models.IntegerField()),
                ('pretador_id', models.IntegerField()),
                ('checklist_id', models.IntegerField()),
                ('indicador', models.CharField(max_length=1)),
                ('cadastrado_em', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
