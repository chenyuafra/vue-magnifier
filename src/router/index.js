import Vue from 'vue'
import Router from 'vue-router'
import ImgEnlarge from '@/components/img-enlarge.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImgEnlarge',
      component: ImgEnlarge
    }
  ]
})
