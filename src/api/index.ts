
import request from 'axios'
const base = '/web-online-room'
const newHouse = '/web-online-newhouse'
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

