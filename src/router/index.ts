
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'House',
    path: '/house',
    component: () => import('@/pages/house/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'Friend',
    path: '/friend',
    component: () => import('@/pages/friend/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'Set',
    path: '/set',
    component: () => import('@/pages/set/index.vue'),
    meta: {
      keepAlive: true
    }
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
