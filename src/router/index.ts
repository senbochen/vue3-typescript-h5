
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/home/index.vue')
  },
  {
    name: 'House',
    path: '/house',
    component: () => import('@/pages/house/index.vue')
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
