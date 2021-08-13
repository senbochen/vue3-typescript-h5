/*
 * @Author: your name
 * @Date: 2021-08-13 15:54:35
 * @LastEditTime: 2021-08-13 16:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-typescript-template/src/permission.ts
 */


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
