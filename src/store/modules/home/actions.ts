/*
 * @Author: your name
 * @Date: 2021-08-11 10:57:36
 * @LastEditTime: 2021-08-12 15:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-typescript-template/src/store/modules/home/actions.ts
 */
import { ActionEnum } from './action-types'
import { MutationsEnum } from './mutation-types'
export default {
  [ActionEnum.Add_Count](ctx: any, value: any) {
    ctx.commit(MutationsEnum.ADD, { count: value })
  }
}
