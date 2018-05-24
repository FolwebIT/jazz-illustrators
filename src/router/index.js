import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import home from '@/components/'
import about from '@/components/about'
import products from '@/components/products'
import contact from '@/components/contact'
import events from '@/components/events'
import services from '@/components/services'
import videos from '@/components/videos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'main',
      component: mainPage
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    }
  ]
})
