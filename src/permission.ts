
import router from './router'
import { RouteLocationNormalized } from 'vue-router'
import { store } from '@/store/index'



router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  if (!store.state.token) {
    if (to.path !== '/login') {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})





router.afterEach((to: RouteLocationNormalized) => {
  document.title = to.meta.title as string
})

