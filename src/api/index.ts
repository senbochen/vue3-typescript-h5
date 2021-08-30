
import request from 'axios'
const base = '/web-online-room'
const newHouse = '/web-online-newhouse'
const api = '/api'
export const getBaseInfor = (params: any) => request({
  params,
  url: base + '/openapi/room/filter/sale',
  method: 'GET',
})

export const erGetBaseInfor = (params: any) => request({
  params,
  url: base + '/openapi/room/list',
  method: 'GET',
})
export const getNewHouse = (params: any) => request({
  params,
  url: newHouse + '/openapi/newhouse/index/list',
  method: 'GET',
})


export const zhiHu = (params: any) => request({
  params,
  url: api + '/Zhihu/zhihu_daily',
  method: 'GET',
})

export const newsList = (params: any) => request({
  params,
  url: api + '/News/local_news',
  method: 'GET',
})
