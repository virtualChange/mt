import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/default'
import homePage from '@/components/home'
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
  }, {
    path: '/changeCity',
    name: 'changeCity',
    component: () => import('@/components/changeCity/index.vue')
  }, {
    path: 's/:name',
    name: 'goodList',
    component: () => import('@/components/goodList/index.vue')
  }]
}]

const router = new VueRouter({
  mode: 'history',
  // 打包后因为(history的问题)不是根目录,所有所有的组件路径都需要加根路径(网站访问的那个根路径,如:dist)
  // base: '/mt',
  routes
})

export default router
