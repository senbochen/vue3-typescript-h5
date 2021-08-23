
import { ActionEnum } from './action-types'
import { MutationsEnum } from './mutation-types'
export default {
  [ActionEnum.Add_Count]({ commit }, value: number) {
    commit(MutationsEnum.ADD, value)
  }
}
