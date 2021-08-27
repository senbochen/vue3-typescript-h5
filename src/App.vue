<template>
  <div class="app-container">
    <!-- vue3 组件动态缓存的写法 -->
    <div class="router-view-wrap">
      <router-view v-slot="{ Component }">
        <transition name="slide-left">
          <keep-alive :include="Array.from(cacheList)" :max="8">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <van-tabbar
      class="tabbar-wrap"
      v-if="route.name !== 'Login'"
      v-model="active"
      active-color="#4994df"
      inactive-color="#000"
      @change="onChange"
    >
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="house" icon="search">二手房</van-tabbar-item>
      <van-tabbar-item name="friend" icon="friends-o">新房</van-tabbar-item>
      <van-tabbar-item name="set" icon="setting-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
export default defineComponent({
  name: 'App',
  setup() {
    const active = ref('home')
    const cacheList = ref(new Set())
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const onChange = () => {
      store.commit(MutationsEnum.ChangeTabName, active.value)
      router.push(`/${active.value}`)
    }
    // demo
    watch(
      () => store.state.activeTabName,
      (newVal: any) => {
        active.value = newVal
      }
    )
    watch(
      () => route,
      (newVal: any) => {
        if (newVal.meta.keepAlive) {
          cacheList.value.add(newVal.name)
        }
      },
      { deep: true }
    )

    return { onChange, active, route, cacheList }
  }
})
</script>

<style scoped lang='scss'>
.router-view-wrap {
  max-height: calc(100vh - 1.5rem);
  height: 100%;
  overflow-y: scroll;
}
.tabbar-wrap {
  height: 1.5rem;
}
</style>
