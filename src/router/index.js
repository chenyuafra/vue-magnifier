import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index.vue'
import ImgEnlarge from '@/view/img-enlarge.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: home
  }, {
    path: '/imgenlarge',
    name: 'ImgEnlarge',
    component: ImgEnlarge
  }]
})
