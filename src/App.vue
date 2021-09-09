<template>
  <div class="app-container">
    <div
      class="router-view-wrap"
      :style="{ paddingBottom: loginCss ? '1.5rem' : '0' }"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide-left">
          <keep-alive :include="Array.from(cacheList)" :max="8">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <Tabs v-if="loginCss"></Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
import Tabs from './views/tab/index.vue'
export default defineComponent({
  name: 'App',
  components: { Tabs },
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

    const loginCss = computed(() => {
      return route.name !== 'Login'
    })
    watch(
      () => route,
      (newVal: any) => {
        if (newVal.meta.keepAlive) {
          cacheList.value.add(newVal.name)
        }
      },
      { deep: true }
    )
    return { onChange, active, route, cacheList, loginCss }
  }
})
</script>

<style scoped lang='scss'>
.router-view-wrap {
  overflow: auto;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
