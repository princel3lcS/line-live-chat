import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Queue from '../views/Queue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/queue',
    name: 'queue',
    component: Queue
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
