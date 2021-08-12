import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { home } from './modules/home/index'
interface Key {
  key: unknown
}



export const key: InjectionKey<Store<Key>> = Symbol()
export const store = createStore({
  modules: {
    home: home
  }
})


// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}

