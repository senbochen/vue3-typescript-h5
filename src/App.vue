<template>
  <div class="app-container">
    <!-- vue3 组件动态缓存的写法 -->
    <transition name="slide-left">
      <router-view v-slot="{ Component }">
        <keep-alive :include="Array.from(cacheList)" :max="8">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </transition>
    <van-tabbar
      v-if="route.name !== 'Login'"
      v-model="active"
      active-color="#4994df"
      inactive-color="#000"
      @change="onChange"
    >
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="house" icon="search">社区</van-tabbar-item>
      <van-tabbar-item name="friend" icon="friends-o">朋友</van-tabbar-item>
      <van-tabbar-item name="set" icon="setting-o">设置</van-tabbar-item>
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
      store.commit(MutationsEnum.ChangeTabName, { activeTabName: active.value })
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
</style>
