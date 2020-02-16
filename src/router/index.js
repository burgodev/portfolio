import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/portfolio/LandingPage.vue'
import Intro from '../views/portfolio/Intro'
import Home from '../sections/portfolio2.0/Home'
import Teste from '../views/portfolio/Teste'
import LandingPage from '../views/portfolio2.0/LandingPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },

  {
    path: '/home',
    name: 'LandingPage',
    component: LandingPage
  },

  {
    path: '/teste',
    name: 'Teste',
    component: Teste
  },

  {
    path: '/intro',
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
