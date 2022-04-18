import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const scene: AppRouteModule = {
  path: '/scene',
  name: 'Scene',
  component: LAYOUT,
  meta: {
    icon: 'ant-design:border-outlined',
    title: t('routes.scene.scene'),
    orderNo: 11,
  },
  children: [
    {
      path: 'map',
      name: 'Map',
      meta: {
        title: t('routes.scene.map.mapManger'),
      },
      children: [
        {
          path: 'workspace',
          name: 'Workspace',
          component: () => import('/@/views/scene/map/workspace/index.vue'),
          meta: {
            title: t('routes.scene.map.workSpaceManger'),
          },
        },
        {
          path: 'mapEdit',
          name: 'MapEdit',
          component: () => import('/@/views/scene/map/mapEdit/index.vue'),
          meta: {
            title: t('routes.scene.map.mapEdit'),
          },
        },
      ],
    },
    {
      path: 'device',
      name: 'Device',
      meta: {
        title: t('routes.scene.device.deviceManager'),
      },
      children: [
        {
          path: 'elevator',
          name: 'Elevator',
          component: () => import('/@/views/scene/device/elevator/index.vue'),
          meta: {
            title: t('routes.scene.device.elevator'),
          },
        },
        {
          path: 'workspaceDevice',
          name: 'workspaceDevice',
          component: () => import('/@/views/scene/device/workspaceDevice/index.vue'),
          meta: {
            title: t('routes.scene.device.workspaceDevice'),
          },
        },
        {
          path: 'charger',
          name: 'Charger',
          component: () => import('/@/views/scene/device/charger/index.vue'),
          meta: {
            title: t('routes.scene.device.charger'),
          },
        },
      ],
    },
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('/@/views/scene/monitorVisualization/index.vue'),
      meta: {
        title: t('routes.scene.monitor'),
      },
    },
    {
      path: 'sceneVisualization',
      name: 'SceneVisualization',
      component: () => import('/@/views/scene/sceneVisualization/index.vue'),
      meta: {
        title: t('routes.scene.sceneVisualization'),
      },
    },
  ],
};

export default scene;
