from rest_framework import routers
from .api import UsuarioViewSet
from .api import HistoricoViewSet
from .api import CheckListViewSet
from .api import EstabelecimentoViewSet

router = routers.DefaultRouter()
router.register('api/usuarios', UsuarioViewSet, 'usuarios')
router.register('api/historico', HistoricoViewSet, 'historico')
router.register('api/checklist', CheckListViewSet, 'checklist')
router.register('api/estabelecimento', EstabelecimentoViewSet, 'estabelecimento')


urlpatterns = router.urls
