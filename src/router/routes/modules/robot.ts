import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const robot: AppRouteModule = {
  path: '/robot',
  name: 'Robot',
  component: LAYOUT,
  meta: {
    icon: 'ant-design:robot-outlined',
    title: t('routes.robot.robot'),
    orderNo: 13,
  },
  children: [
    {
      path: 'group',
      name: 'GroupManager',
      meta: {
        title: t('routes.robot.group'),
      },
      component: () => import('/@/views/robot/group/index.vue'),
    },
    {
      path: 'robot',
      name: 'RobotManager',
      meta: {
        title: t('routes.robot.robot'),
      },
      component: () => import('/@/views/robot/robot/index.vue'),
    },
  ],
};

export default robot;
