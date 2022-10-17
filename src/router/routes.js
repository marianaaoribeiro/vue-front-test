

// const header = () => import('@/components/Header.vue')

const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   components: {
  //     default: () => import('@/views/Login.vue'),
  //   },
  //   meta: {
  //     requiresAuth: false,
  //   },
  // },
  {
    path: '/home',
    name: 'home',
    components: {
      //header,
      default: () => import('@/views/Home.vue'),
    },
    meta: {
      title: 'Home',
      requiresAuth: false,
      breadcrumb: [
        {
          name: 'home',
          alias: 'Home',
        },
      ],
    },
  },
  {
    path: '*',
    redirect: '/home',
  },
]
export default routes
