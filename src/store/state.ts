/*
 * @Author: your name
 * @Date: 2021-08-11 10:57:19
 * @LastEditTime: 2021-08-13 16:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-typescript-template/src/store/state.ts
 */
export interface State {
  count: number
  name: string
  activeTabName: string
  token: string
}

const state: State = {
  count: 2022,
  name: '今年是2021年',
  activeTabName: 'home',
  token: ''
}
export default state
