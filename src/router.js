import Vue from 'vue'
import Router from 'vue-router'
import * as pages from './pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: pages.LandingPage
    },
    {
      path: '/yeaters',
      name: 'YeatersPage',
      component: pages.YeatersPage
    },
    {
      path: '/yoters',
      name: 'YotersPage',
      component: pages.YotersPage
    }
  ]
})
