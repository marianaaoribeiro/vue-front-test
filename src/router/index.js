import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// const verifyAcess = (route, resources) => {
//   if (resources) {
//     return resources.includes(route)
//   }
//   return false
// }
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
//   const user = localStorage.user ? JSON.parse(localStorage.user) : {}
//   store.commit('checkAuthentication')

//   if (requiresAuth && !store.getters.isAuthenticated) {
//     next('/login')
//   } else if (requiresAuth && store.getters.isAuthenticated) {
//     if (verifyAcess(to.name, user.resources)) {
//       next((vm) => {
//         vm.$router.push(to.path)
//       })
//     } else {
//       next('/forbidden')
//     }
//   } else {
//     next()
  // }
 //})

export default router
