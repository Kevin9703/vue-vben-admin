import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const scheduling: AppRouteModule = {
  path: '/scheduling',
  name: 'Scheduling',
  component: LAYOUT,
  meta: {
    icon: 'ant-design:profile-outlined',
    title: t('routes.scheduling.scheduling'),
    orderNo: 12,
  },
  children: [
    {
      path: 'mesOrErp',
      name: 'MesOrErp',
      meta: {
        title: t('routes.scheduling.mesOrErp'),
      },
      component: () => import('/@/views/scheduling/mesOrErp/index.vue'),
    },
    {
      path: 'task',
      name: 'Task',
      meta: {
        title: t('routes.scheduling.task'),
      },
      component: () => import('/@/views/scheduling/task/index.vue'),
    },
    {
      path: 'schedulingPrinciple',
      name: 'SchedulingPrinciple',
      meta: {
        title: t('routes.scheduling.schedulingPrinciple'),
      },
      component: () => import('/@/views/scheduling/schedulingPrinciple/index.vue'),
    },
    {
      path: 'pathPlaning',
      name: 'PathPlaning',
      meta: {
        title: t('routes.scheduling.pathPlaning'),
      },
      component: () => import('/@/views/scheduling/pathPlaning/index.vue'),
    },
    {
      path: 'realTimeMonitor',
      name: 'RealTimeMonitor',
      meta: {
        title: t('routes.scheduling.realTimeMonitor'),
      },
      component: () => import('/@/views/scheduling/realTimeMonitor/index.vue'),
    },
    {
      path: 'traffic',
      name: 'Traffic',
      meta: {
        title: t('routes.scheduling.traffic'),
      },
      component: () => import('/@/views/scheduling/traffic/index.vue'),
    },
    {
      path: 'stationCommunication',
      name: 'StationCommunication',
      meta: {
        title: t('routes.scheduling.stationCommunication'),
      },
      component: () => import('/@/views/scheduling/stationCommunication/index.vue'),
    },
  ],
};

export default scheduling;
