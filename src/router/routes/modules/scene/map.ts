import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const map: AppRouteModule = {
  path: '/scene',
  name: 'Scene',
  component: LAYOUT,
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.scene.scene'),
    orderNo: 11,
  },
  children: [
    {
      path: 'map',
      name: 'Map',
      meta: {
        title: t('routes.scene.map.mapManger'),
        icon: 'simple-icons:about-dot-me',
      },
      children: [
        {
          path: 'workspace',
          name: 'Workspace',
          component: () => import('/@/views/scene/map/workspace/index.vue'),
          meta: {
            title: t('routes.scene.map.workSpaceManger'),
            icon: 'simple-icons:about-dot-me',
          },
        },
        {
          path: 'mapEdit',
          name: 'MapEdit',
          component: () => import('/@/views/scene/map/mapEdit/index.vue'),
          meta: {
            title: t('routes.scene.map.mapEdit'),
            icon: 'simple-icons:about-dot-me',
          },
        },
      ],
    },
  ],
};

export default map;
