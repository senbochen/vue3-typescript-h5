

<template>
  <div class="common-container">
    <van-icon class-prefix="iconfont" name="iconfont iconweixin" />
    <van-icon class-prefix="iconfont" name="iconfont icontuite" />
    <van-icon class-prefix="iconfont" name="iconfont iconweibo" />
    <ul>
      <li>12</li>
      <li>12</li>
      <li>12</li>
    </ul>
    <p>{{ contryName }}</p>
    <p>{{ count }}</p>
    <van-button type="primary" @click="changeMutation" style="width: 100%"
      >Vuex Mutation事件 改变
    </van-button>
    <van-button type="primary" @click="change" style="width: 100%"
      >Vuex Action事件 改变
    </van-button>
    <van-button type="success" @click="backChange" style="width: 100%"
      >Vuex Action事件 恢复</van-button
    >
    <van-button type="primary" @click="back" style="width: 100%"
      >回去</van-button
    >
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store/index'
import { ActionEnum } from '@/store/action-types'
import { MutationsEnum } from '@/store/mutation-types'
const House = defineComponent({
  name: 'House',
  setup() {
    const name = ref('房子')
    const router = useRouter()
    const store = useStore()
    const back = () => {
      router.push({
        path: '/home'
      })
      store.commit(MutationsEnum.ChangeTabName, 'home')
    }
    const change = () => {
      store.dispatch(ActionEnum.Add_Count, '这是改变的第一步')
    }

    const backChange = () => {
      store.dispatch(ActionEnum.Add_Count, '2022')
    }

    const changeMutation = () => {
      store.commit(MutationsEnum.NAME, '这是一个伟大的时代')
    }
    const count = computed(() => {
      return store.state.count
    })
    const contryName = computed(() => {
      return store.state.name
    })

    return {
      name,
      back,
      count,
      contryName,
      change,
      backChange,
      changeMutation
    }
  }
})
export default House
</script>
<style scoped lang='scss'>
p {
  font-size: 14px;
}
</style>
