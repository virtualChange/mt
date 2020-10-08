import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/default'
import homePage from '@/components/homePage'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'defaultPage',
  component: DefaultPage,
  redirect: '/home',
  children: [{
    path: '/home',
    name: 'homePage',
    component: homePage
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
