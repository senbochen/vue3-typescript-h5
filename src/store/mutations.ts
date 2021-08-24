
import { MutationsEnum } from './mutation-types'


export default {
  [MutationsEnum.ADD](state: ObjectType, value: number) {
    state.count = value
  },
  [MutationsEnum.NAME](state: ObjectType, value: string) {
    state.name = value
  },
  [MutationsEnum.ChangeTabName](state: ObjectType, value: string) {
    state.activeTabName = value
  },
  [MutationsEnum.AddToken](state: ObjectType, value: string) {
    state.token = value
  },
  [MutationsEnum.RemoveToken](state: ObjectType) {
    state.token = ''
  }
}
