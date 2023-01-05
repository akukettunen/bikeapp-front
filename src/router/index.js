import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/trips',
    name: 'Trips',
    component: () => import(/* webpackChunkName: "about" */ '../views/Trips.vue')
  },
  {
    path: '/stations',
    name: 'Stations',
    component: () => import(/* webpackChunkName: "about" */ '../views/Stations.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
