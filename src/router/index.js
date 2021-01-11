import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import WorkTime from '../views/WorkTime'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/worktime',
    name: 'WorkTime',
    component: WorkTime
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
