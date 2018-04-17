import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainPage
    }
  ]
})
