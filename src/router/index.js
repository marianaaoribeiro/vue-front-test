import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
  store.commit('checkAuthentication')
  if (requiresAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else if (requiresAuth && store.getters.isAuthenticated) {
      next((vm) => {
        vm.$router.push(to.path)
      })
  } else {
    next()
  }
 })

export default router
