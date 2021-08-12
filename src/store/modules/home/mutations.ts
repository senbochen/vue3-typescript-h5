/*
 * @Author: your name
 * @Date: 2021-08-11 10:57:29
 * @LastEditTime: 2021-08-12 15:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-typescript-template/src/store/modules/home/mutations.ts
 */
import { MutationsEnum } from './mutation-types'


export default {
  [MutationsEnum.ADD](state: any, payload: any) {
    state.count = payload.count
  },
  [MutationsEnum.NAME](state: any, payload: any) {
    state.name = payload.name
  }
}
