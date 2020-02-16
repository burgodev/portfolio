import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/portfolio/LandingPage.vue'
import Intro from '../views/portfolio/Intro'
import Teste from '../views/portfolio/Teste'


Vue.use(VueRouter)

const routes = [
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },

  {
    path: '/teste',
    name: 'Teste',
    component: Teste
  },

  {
    path: '/',
    name: 'Intro',
    component: Intro
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
