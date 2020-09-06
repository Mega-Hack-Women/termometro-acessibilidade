from rest_framework import routers
from .api import UsuarioViewSet, HistoricoAvaliacaoViewSet, CheckListViewSet, EstabelecimentoViewSet

router = routers.DefaultRouter()
router.register('api/usuarios', UsuarioViewSet, 'usuarios')
router.register('api/historico', HistoricoAvaliacaoViewSet, 'historico')
router.register('api/checklist', CheckListViewSet, 'checklist')
router.register('api/estabelecimento',
                EstabelecimentoViewSet, 'estabelecimento')


urlpatterns = router.urls
