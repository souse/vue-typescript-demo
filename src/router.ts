import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName "detail" */ './views/Detail/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName "cart" */ './views/Cart/index.vue')
    }
  ]
})
