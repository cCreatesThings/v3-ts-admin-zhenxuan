export const routes = [
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/Screen/index.vue'),
    meta: { title: '数据大屏', hidden: false, Icon: 'gg:screen' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Layout/index.vue'),
    meta: { title: '首页', hidden: false, Icon: 'solar:home-bold' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页', hidden: false, Icon: 'solar:home-bold' }
      }
    ]
  },
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/views/Layout/index.vue'),
    redirect: '/acl/user', // 这里使用绝对路径确保重定向正确
    meta: { title: '权限管理', hidden: false, Icon: 'tabler:lock-filled' },
    children: [
      {
        path: '/acl/role',
        name: 'Role',
        component: () => import('@/views/Acl/components/Role/index.vue'),
        meta: {
          title: '角色管理',
          parentPath: 'acl',
          hidden: false,
          Icon: 'ph:person-fill'
        }
      },
      {
        path: '/acl/user',
        name: 'User',
        component: () => import('@/views/Acl/components/User/index.vue'),
        meta: {
          title: '用户管理',
          parentPath: 'acl',
          hidden: false,
          Icon: 'uil:user'
        }
      },
      {
        path: '/acl/permission',
        name: 'Permission',
        component: () => import('@/views/Acl/components/Permission/index.vue'),
        meta: {
          parentPath: 'acl',
          title: '菜单管理',
          hidden: false,
          Icon: 'fluent-mdl2:permissions-solid'
        }
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/Layout/index.vue'),
    meta: {
      title: '商品管理',
      hidden: false,
      Icon: 'map:grocery-or-supermarket'
    },
    children: [
      {
        path: '/product/spu',
        name: 'Spu',
        component: () => import('@/views/Product/components/Spu/index.vue'),
        meta: { title: 'SPU管理', hidden: false, Icon: 'mingcute:grid-fill' }
      },
      {
        path: '/product/sku',
        name: 'Sku',
        component: () => import('@/views/Product/components/Sku/index.vue'),
        meta: { title: 'SKU管理', hidden: false, Icon: 'si:grid-fill' }
      },
      {
        path: '/product/attr',
        name: 'Attr',
        component: () => import('@/views/Product/components/Attr/index.vue'),
        meta: {
          title: '属性管理',
          hidden: false,
          Icon: 'material-symbols-light:attribution'
        }
      },
      {
        path: '/product/trademark',
        name: 'Trademark',
        component: () =>
          import('@/views/Product/components/Trademark/index.vue'),
        meta: { title: '商标管理', hidden: false, Icon: 'icon-park-solid:mark' }
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
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404',
  //   name: 'any',
  //   meta: { title: 'pattern', hidden: true }
  // }
]
