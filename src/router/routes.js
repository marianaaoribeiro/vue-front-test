

const header = () => import('@/components/Header.vue')
const footer = () => import('@/components/Footer.vue')

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {
      default: () => import('@/views/Login.vue'),
    },
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/home',
    name: 'home',
    components: {
      header,
      footer,
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
