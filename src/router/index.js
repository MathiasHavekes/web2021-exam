import Vue from 'vue'
import VueRouter from 'vue-router'
import Actualité from '../views/Actualité.vue'
import Sport from '../views/Sport.vue'
import CovidPage from '../views/Covid-19.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Actualité',
    component: Actualité
  },
  {
    path: '/sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/COVID-19',
    name: 'Covid-19',
    component: CovidPage
  },
]

const router = new VueRouter({
  routes
})

export default router
