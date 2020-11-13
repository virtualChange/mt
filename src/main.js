import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util'
import '@/axios'
import '@/element-ui'
import '@/directive'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
