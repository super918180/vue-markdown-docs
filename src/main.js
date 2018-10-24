import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routesMap from './views/routesMap'

Vue.config.productionTip = false
Vue.component('routes-map', routesMap)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')