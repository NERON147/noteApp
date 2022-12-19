import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Open from '@/views/open.vue'
import Home from '@/views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/open/:id',
    name: 'open',
    component: Open
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
