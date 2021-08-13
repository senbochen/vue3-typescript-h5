
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State } from './state'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore({
  state,
  mutations,
  actions,
  modules: {}
})



// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
