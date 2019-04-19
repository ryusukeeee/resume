import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/Experience',
      name: 'experience',
      component: () => import('./views/Experience.vue')
    },
    {
      path: '/Works',
      name: 'works',
      component: () => import('./views/Works.vue')
    },
    {
      path: '/Posts',
      name: 'posts',
      component: () => import('./views/Posts.vue'),
    },
    {
      path: '*',
      name: 'home',
      component: () => import('./views/Home.vue')
    }
  ]
})
