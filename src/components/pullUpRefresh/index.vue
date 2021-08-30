<template>
  <div class="pull-down-refresh-wrap" ref="pullRef">
    <slot></slot>
    <div class="status" v-show="isShow">{{ tipText }}......</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { scrollParent, getScrollTop } from './index'

const ComponentName = 'PullUpRefresh.vue'

const PullUpRefresh = defineComponent({
  name: ComponentName,
  setup(props, { emit }) {
    const pullRef = ref(null)
    const startPosition = ref(0)
    const scrollHeight = ref(0)
    const containerHeight = ref(0)
    const tipText = ref('加载更多')
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
        scrollHeight.value = pullDom.scrollHeight
        containerHeight.value = pullDom.clientHeight
      }

      const refreshTouchMove = (event: any) => {
        const scrollTop = checkPosition()
        distanceY.value = event.touches[0].pageY - startPosition.value
        if (scrollHeight.value - scrollTop - containerHeight.value <= 70) {
          isShow.value = true
        } else {
          isShow.value = false
        }
      }

      const refreshTouchEnd = () => {
        const scrollTop = checkPosition()
        if (
          scrollHeight.value - scrollTop - containerHeight.value <= 70 &&
          distanceY.value <= -100
        ) {
          clearTimeout(timer.value)
          timer.value = setTimeout(async () => {
            await emit('update')
            isShow.value = false
          }, 900)
        } else {
          isShow.value = false
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

    return {
      pullRef,
      tipText,
      isShow
    }
  }
})
export default PullUpRefresh
</script>
<style scoped lang='scss'>
.pull-down-refresh-wrap {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
  transition: all 0.3s linear;
  max-height: calc(100vh - 1.5rem);
}

.status {
  width: 100%;
  max-height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: rgb(31, 31, 31);
  transition: all 0.3s linear;
}
</style>
