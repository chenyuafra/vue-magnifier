import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index.vue'
import ImgEnlarge from '@/view/img-enlarge.vue'
import Picture from '@/view/picture.vue'
import Show from '@/view/show.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/imgenlarge',
      name: 'ImgEnlarge',
      component: ImgEnlarge
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }]
  } ]
})
