# AcesSaúde 

Uma plataforma feita para emancipar e empoderar a PCD no cuidado com sua saúde.

A AcesSaúde é uma plataforma de gerenciamento de saúde que quer priorizar a melhoria de vida dessa parcela da população. Quando se precisa de um atendimento médico normalmente se busca no guia médico o profissional adequado para a necessidade do momento. Muitas vezes, essa escolha é aleatória ou baseada em indicações de amigos. Neste sentido, podemos perceber que as pessoas com deficiência tem uma dificuldade maior de encontrar um local que tenha as condições adequadas para atendê-los. Além disso, ao ir a uma consulta é preciso reunir uma quantidade enorme de informações que estão espalhadas em diferentes lugares como prescrições, resultados de exames, agendamentos. 

É preciso que essas informações sejam organizadas de maneira acessível e centralizada para que as barreiras da deficiência não impeça a PCD de ter o controle sobre a própria saúde.

[Pitch](https://github.com/Mega-Hack-Women/termometro-acessibilidade/blob/main/arquivos/VideoPitch.mp4)

[Apresentação PDF](https://github.com/Mega-Hack-Women/termometro-acessibilidade/blob/main/arquivos/AcesSaude_FINAL.pdf)

[Video Demo]()


## Termômetro de Acessibilidade

Funcionalidades:
- Faça seu cadastro;
- Verifique os estabelecimentos cadastrados;
- Se não existir, cadastre o estabelecimento que você visitou;
- Faça avaliação do estabelecimento;
- Verifique como o estabelecimento está avaliado na lei de acessibilidade.


### Para iniciar o projeto frontend pela primeira vez localmente, seguir os passos:

#### 1) Entrar na pasta web
```
cd web
```

#### 2) Rodar o seguinte código para instalar as dependências:
```
yarn install
```

#### 3) Para abrir o projeto localmente, rodar:
```
yarn start
```

#### 4) Caso dê tudo certo, acessar: http://localhost:3000  


### Para futuros acessos:

#### Entra na pasta web e rodar o projeto localmente:
```
cd web
yarn start
```


### Para iniciar o projeto backend pela primeira vez localmente, seguir os passos:

#### 1) Entrar na pasta server
```
cd server
```

#### 2) Precisa ter o Python, Django, Django RestFramework, Django Filters instalado
```
pip3 install pipenv
pipenv install shell
pipenv install django djangorestframework django_filters
```

#### 3) Para iniciar o servidor backend
```
python manage.py runserver
```

#### 4) Caso dê tudo certo, acessar: http://localhost:8000/api  
- http://localhost:8000/api/usuarios/
- http://localhost:8000/api/estabelecimento/
- http://localhost:8000/api/historico/
- http://localhost:8000/api/checklist/
