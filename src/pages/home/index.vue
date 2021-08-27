
<template>
  <div class="common-container">
    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.areaList"
      :key="item.value"
      >{{ item.desc }}</van-tag
    >
    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.bedroomList"
      :key="item.value"
      >{{ item.desc }}</van-tag
    >
    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.cityList"
      :key="item.value"
      >{{ item.desc }}</van-tag
    >

    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.decorationList"
      :key="item.value"
      >{{ item.desc }}</van-tag
    >
    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.directionList"
      :key="item.id"
      >{{ item.desc }}</van-tag
    >

    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#000000"
      v-for="item in inforData.lineList"
      :key="item.value"
    >
      <span v-for="item in item.stationList" :key="item.id"
        >{{ item.name }}- {{ item.name }}</span
      >
    </van-tag>
    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.roomAgeList"
      :key="item.value"
      >{{ item.desc }}</van-tag
    >
    <van-tag
      style="margin: 10px; padding: 10px"
      color="#ffe1e1"
      text-color="#ad0000"
      v-for="item in inforData.roomLabelList"
      :key="item.value"
      >{{ item.desc }}</van-tag
    >
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
          data: { result }
        } = await getBaseInfor({})
        inforData.value = result
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
