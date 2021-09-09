
import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import routes from './route-config'




const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: any): any => {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 1 })
      })
    })
  },
  routes
})



export default router
