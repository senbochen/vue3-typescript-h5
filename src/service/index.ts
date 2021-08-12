
import axios from 'axios'
import { Toast } from 'vant'
import { CODE, CODE_TEXT } from './code'


axios.interceptors.request.use(function (config) {
  Toast.clear()
  return config
}, function (error: AxiosLib.ExtendsAxiosError<FetchResponse.Response>) {

  return Promise.reject(error)
})


axios.interceptors.response.use(function (response) {

  const { status } = response
  const index = CODE.findIndex((res: number) => res === status)
  if (CODE.includes(status)) {
    Toast.fail(CODE_TEXT[index])
    return Promise.reject(CODE_TEXT[index])
  }
  return response
}, function (error: AxiosLib.ExtendsAxiosError<FetchResponse.Response>) {

  return Promise.reject(error)
})


