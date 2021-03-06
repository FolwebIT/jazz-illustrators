// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import PageHeader from '@/components/headerPanel.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false
Vue.component('hpanel', PageHeader)
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
