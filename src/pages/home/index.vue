
<template>
  <div class="common-container">
    <span>toRefs解构取值:</span>
    <span>{{ name }}</span>
    <span>{{ age }}</span>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="item in inforData"
        :key="item.number"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <van-image width="100%" height="100%" :src="item.poster" />
      </van-swipe-item>
    </van-swipe>
    <van-button type="primary" @click="skip" style="margin-top: 10px"
      >跳转路由</van-button
    >
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Name } from './index'
import { getBaseInfor } from '@/api/index'
import { useStore } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
const Home = defineComponent({
  name: 'Home',
  setup() {
    const loading = ref(true)
    const count = ref(0)
    const inforData = ref([])
    const store = useStore()
    const house = reactive<Name>({
      name: '房子',
      age: 212
    })

    const router = useRouter()
    const getInfor = async () => {
      try {
        const {
          data: {
            data: { dataList }
          }
        } = await getBaseInfor({
          srcid: 50522,
          full_column_event: 'tokyo_olympic_2021',
          query: '中国金牌'
        })
        inforData.value = dataList
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    }

    //接口请求
    onMounted(() => {
      getInfor()
    })

    //路由跳转
    const skip = () => {
      store.commit(MutationsEnum.ChangeTabName, 'house')
      router.push({ path: '/house' })
    }

    return {
      count,
      skip,
      ...toRefs(house),
      inforData,
      loading
    }
  }
})

export default Home
</script>
<style scoped lang="scss">
.common-container {
  font-size: 12px;
  span {
    display: inline-block;
    padding: 10px 0;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
