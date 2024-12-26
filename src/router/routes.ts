export const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('@/views/Layout/index.vue'),
    meta: { title: 'Layout', hidden: false },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页', hidden: false }
      },
      {
        path: '/author',
        name: 'author',
        meta: { title: '权限管理', hidden: false },
        children: [
          {
            path: 'role',
            name: 'role',
            meta: { title: '角色管理', hidden: false }
          }
        ]
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: { title: '404', hidden: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: { title: 'pattern', hidden: true }
  }
]
