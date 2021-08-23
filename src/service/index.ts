

import axios from 'axios'
import { Toast } from 'vant'
import { CODE, CODE_TEXT } from './code'
import { store } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
import router from '@/router/index'

axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const CancelToken = axios.CancelToken
const source = CancelToken.source()



axios.interceptors.request.use(function (config: any) {
  if (!config.hideloading) {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    })

  }

  if (store.state.token) {
    config.headers.Authorization = `token ${store.state.token}`
  } else {
    config.cancelToken = source.token // 全局添加cancelToken
  }

  return config
}, function (error: AxiosLib.ExtendsAxiosError<FetchResponse.Response>) {

  return Promise.reject(error)
})


axios.interceptors.response.use(function (response) {
  Toast.clear()
  const { status } = response
  const index = CODE.findIndex((res: number) => res === status)
  if (CODE.includes(status)) {
    Toast.fail(CODE_TEXT[index])
    return Promise.reject(CODE_TEXT[index])
  }
  if (status === 400) {
    source.cancel()
    store.commit(MutationsEnum.RemoveToken)
    const path = router.currentRoute as any
    path.path !== 'login' &&
      router.replace({
        path: 'login',
        query: { redirect: path.path },
      })
  }
  return response
}, function (error: AxiosLib.ExtendsAxiosError<FetchResponse.Response>) {

  return Promise.reject(error)
})


