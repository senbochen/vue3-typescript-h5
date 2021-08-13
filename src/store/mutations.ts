
import { MutationsEnum } from './mutation-types'


export default {
  [MutationsEnum.ADD](state: any, payload: any) {
    state.count = payload.count
  },
  [MutationsEnum.NAME](state: any, payload: any) {
    state.name = payload.name
  },
  [MutationsEnum.ChangeTabName](state: any, payload: any) {
    state.activeTabName = payload.activeTabName
  },
  [MutationsEnum.AddToken](state: any, payload: any) {
    state.token = payload.token
  },
  [MutationsEnum.RemoveToken](state: any) {
    state.token = ''
  }
}
