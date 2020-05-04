import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import './plugins/element-ui'
import { getCookie } from './tool/tools'
import VueUeditorWrap from 'vue-ueditor-wrap'

Vue.component('vue-ueditor-wrap', VueUeditorWrap)

store.dispatch('setToken', getCookie('token') || '')

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
