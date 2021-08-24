
import request from 'axios'
const base = '/web-online-room'

const getBaseInfor = (params: any) => request({
  params,
  url: base + '/openapi/room/filter/sale',
  method: 'GET',
})


export { getBaseInfor }
