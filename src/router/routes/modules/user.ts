import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  meta: {
    icon: 'ant-design:user-outlined',
    title: t('routes.user.user'),
    orderNo: 14,
  },
  children: [
    {
      path: 'group',
      name: 'GroupManager',
      meta: {
        title: t('routes.user.group'),
      },
      component: () => import('/@/views/user/group/index.vue'),
    },
    {
      path: 'user',
      name: 'UserManager',
      meta: {
        title: t('routes.user.user'),
      },
      component: () => import('/@/views/user/user/index.vue'),
    },
  ],
};

export default user;
