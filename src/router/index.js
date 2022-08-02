import { Main } from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Main.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: () => import('../views/Main.vue'),
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('../views/Home')
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: () => import('../views/User')
      // },
      // {
      //   path: '/mall',
      //   name: 'mall',
      //   component: () => import('../views/Mall')
      // },
      // {
      //   path: '/page1',
      //   name: 'page1',
      //   component: () => import('../views/Other/pageOne.vue')
      // },
      // {
      //   path: '/page2',
      //   name: 'page2',
      //   component: () => import('../views/Other/pageTwo.vue')
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
