import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
Vue.config.productionTip = false
Vue.use(VueTheMask)
Vue.use(require('vue-dayjs'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
