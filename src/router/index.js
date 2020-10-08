import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/default'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: DefaultPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
