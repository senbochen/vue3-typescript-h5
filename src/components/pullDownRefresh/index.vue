<template>
  <div class="pull-down-refresh-wrap" ref="pullRef">
    <div class="status" v-if="isShow">
      {{ tipText }}
    </div>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  ref
} from 'vue'
import { scrollParent, getScrollTop } from './index'
const ComponentName = 'PullDownRefresh'
const PullDownRefresh = defineComponent({
  name: ComponentName,
  setup(props, { emit }) {
    const pullRef = ref(null)
    const startPosition = ref(0)
    const tipText = ref('下拉刷新')
    const timer = ref(0)
    const isShow = ref(false)

    onMounted(() => {
      const pullDom = pullRef.value as any
      const distanceY = ref(0)
      const scrollParentDom = scrollParent(pullDom)
      const checkPosition = () => {
        return getScrollTop(scrollParentDom)
      }
      const refreshTouchStart = (event: any) => {
        startPosition.value = event.touches[0].pageY
      }

      const refreshTouchMove = (event: any) => {
        const scrollTop = checkPosition()
        distanceY.value = event.touches[0].pageY - startPosition.value
        if (scrollTop <= 0 && distanceY.value >= 100) {
          tipText.value = distanceY.value > 200 ? '释放刷新' : '下拉刷新'
          pullDom.style.transform = 'translateY(0px)'
        }
      }

      const refreshTouchEnd = () => {
        const scrollTop = checkPosition()
        if (scrollTop <= 0 && distanceY.value >= 100) {
          tipText.value = '拼命加载中'
          clearTimeout(timer.value)
          timer.value = setTimeout(async () => {
            await emit('update')
            pullDom.style.transform = 'translateY(-50px)'
            tipText.value = '加载完毕'
          }, 900)
        } else {
          pullDom.style.transform = 'translateY(-50px)'
        }
      }

      pullDom?.addEventListener('touchstart', refreshTouchStart)
      pullDom?.addEventListener('touchmove', refreshTouchMove)
      pullDom?.addEventListener('touchend', refreshTouchEnd)
      onUnmounted(() => {
        pullDom?.removeEventListener('touchstart', refreshTouchStart)
        pullDom?.removeEventListener('touchmove', refreshTouchMove)
        pullDom?.removeEventListener('touchend', refreshTouchEnd)
        clearTimeout(timer.value)
        console.log('组件已经卸载了')
      })
    })
    onBeforeUpdate(() => {
      isShow.value = true
    })
    return {
      pullRef,
      tipText,
      isShow
    }
  }
})
export default PullDownRefresh
</script>
<style scoped lang='scss'>
.pull-down-refresh-wrap {
  max-height: calc(100vh - 50px);
  min-height: calc(100vh - 0.5rem);
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
  transition: all 0.3s linear;
  transform: translateY(-50px);
}

.status {
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: rgb(31, 31, 31);
}
</style>
