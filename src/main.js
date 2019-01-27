// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Create from './components/Create.vue'
import Edit from './components/Edit.vue'
import Home from './components/Home.vue'
import Index from './components/Index.vue'

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
      name: 'create',
      path: '/create',
      component: Create
  },
  {
      name: 'posts',
      path: '/posts',
      component: Index
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: Edit
  }
]

const router = new VueRouter({ mode: 'history', routes: routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
