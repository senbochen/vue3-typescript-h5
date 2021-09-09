<template>
  <van-tabbar
    class="tabbar-wrap"
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
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
export default defineComponent({
  name: 'Tabs',
  setup() {
    const active = ref('home')
    const router = useRouter()
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

    return { onChange, active }
  }
})
</script>

<style scoped lang='scss'>
</style>
