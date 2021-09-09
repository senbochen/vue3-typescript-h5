
<template>
  <div class="common-container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <li v-for="item in newHouseInfor" :key="item.createTime">
          <span v-if="item.title">{{ item.title }}</span>
          <span v-else>{{ item.model.garden.address }}</span>
          <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            :src="item.model.pictureUrl + '-f300x225'"
          />
        </li>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { getNewHouse } from '@/api/index'
const Set = defineComponent({
  name: 'Set',
  setup() {
    const loading = ref(false)
    const finished = ref(false)
    const currentPage = ref(1)
    const refreshing = ref(false)
    const newHouseInfor = ref([])

    //下拉加载的数据更新函数
    const onLoad = () => {
      update()
    }

    //上拉刷新的数据更新函数
    const onRefresh = () => {
      // 清空列表数据

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      // loading.value = true
      onLoad()
    }

    const update = () => {
      getNewHouseInfor()
    }

    const getNewHouseInfor = async () => {
      try {
        const {
          data: {
            result: {
              records: { items }
            }
          }
        } = await getNewHouse({
          bizType: 'NEWHOUSE',
          pageSize: 25,
          param: 'o2',
          currentPage: currentPage.value++
        })

        newHouseInfor.value = newHouseInfor.value.concat(items)
        if (newHouseInfor.value.length >= 70) {
          finished.value = true
        }
      } catch (error) {
        console.log(error)
      } finally {
        refreshing.value = false
      }
    }

    onMounted(() => {
      update()
    })
    return {
      newHouseInfor,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing
    }
  }
})
export default Set
</script>
<style>
p {
  font-size: 12px;
  padding: 10px;
  margin: 0;
}
span {
  font-size: 12px;
}
li {
  list-style: none;
}
</style>
