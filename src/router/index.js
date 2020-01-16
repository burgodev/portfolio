import Vue from 'vue'
import VueRouter from 'vue-router'

import Banner from '../sections/portfolio/Banner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Banner',
    component: Banner
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
