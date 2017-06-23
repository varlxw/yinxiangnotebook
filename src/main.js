// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
// conponents
import Land from './components/Land/Land'
import Create from './components/Create/Create'
Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.prototype.$ajax = Axios
/* eslint-disable no-new */
// route

const routes = [
  {path: '/', redirect: '/land'},
  {path: '/land', component: Land},
  {path: '/create', component: Create}
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  component: {
    App
  },
  render: create => create(App)
})
