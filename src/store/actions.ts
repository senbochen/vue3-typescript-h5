
import { ActionEnum } from './action-types'
import { MutationsEnum } from './mutation-types'
export default {
  [ActionEnum.Add_Count](ctx: any, value: any) {
    ctx.commit(MutationsEnum.ADD, { count: value })
  }
}
