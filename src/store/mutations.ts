
import { MutationsEnum } from './mutation-types'


export default {
  [MutationsEnum.ADD](state: ObjectType, count: number) {
    state.count = count
  },
  [MutationsEnum.NAME](state: ObjectType, name: string) {
    state.name = name
  },
  [MutationsEnum.ChangeTabName](state: ObjectType, activeTabName: string) {
    state.activeTabName = activeTabName
  },
  [MutationsEnum.AddToken](state: ObjectType, token: string) {
    state.token = token
  },
  [MutationsEnum.RemoveToken](state: ObjectType) {
    state.token = ''
  }
}
