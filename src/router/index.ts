
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**
 * 基础路由
 * @type { *[] }
 */

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      keepAlive: false,
      title: '登陆'
    }
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      keepAlive: true,
      title: '首页'
    }
  },
  {
    name: 'House',
    path: '/house',
    component: () => import('@/pages/house/index.vue'),
    meta: {
      keepAlive: true,
      title: '社区'
    }
  },
  {
    name: 'Friend',
    path: '/friend',
    component: () => import('@/pages/friend/index.vue'),
    meta: {
      keepAlive: true,
      title: '朋友'
    }
  },
  {
    name: 'Set',
    path: '/set',
    component: () => import('@/pages/set/index.vue'),
    meta: {
      keepAlive: true,
      title: '设置'
    }
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
