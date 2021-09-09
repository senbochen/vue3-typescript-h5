
<template>
  <div class="common-container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
const Friend = defineComponent({
  name: 'Friend',
  setup() {
    const list: any = ref([])
    const loading = ref(false)
    const finished = ref(false)

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      console.log('开始')
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1)
        }

        // 加载状态结束
        loading.value = false
        console.log('结束')
        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true
        }
      }, 1000)
    }

    return {
      list,
      onLoad,
      loading,
      finished
    }
  }
})
export default Friend
</script>
<style scoped>
</style>
