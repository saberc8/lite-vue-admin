export default {
  path: '/system',
  name: 'system',
  component: () => import('@/layout/index.vue'),
  redirect: '/system/error',
  meta: {
    requiresAuth: true,
    title: '系统',
    icon: 'icon-home',
  },
  children: [
    {
      path: '/system/error',
      name: 'error',
      component: () => import('@/views/system/error/index.vue'),
      meta: {
        title: '首页',
        icon: 'icon-error',
      },
    },
    {
      path: '/system/404',
      name: 'notFound',
      component: () => import('@/views/system/404/index.vue'),
      meta: {
        title: '404',
        icon: 'icon-error',
      },
    },
  ],
}
