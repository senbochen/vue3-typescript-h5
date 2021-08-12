


const STATUS_CODE = new Map([
  [
    203, '请求为203'
  ],
  [
    404, '请求为404'
  ],
  [
    500, '请求为500'
  ],
  [
    502, '请求为502'
  ],
  [
    503, '请求为503'
  ],
  [
    403, '请求为403'
  ]
])


export const CODE = [...STATUS_CODE.keys()] // 错误状态码
export const CODE_TEXT = [...STATUS_CODE.values()] //错误状态码提示的消息

