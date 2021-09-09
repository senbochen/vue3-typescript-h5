
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
        </li>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { getNewHouse, erGetBaseInfor } from '@/api/index'
const Set = defineComponent({
  name: 'Set',
  setup() {
    const loading = ref(false)
    const finished = ref(false)
    const pageSize = ref(20)
    const refreshing = ref(false)
    const newHouseInfor = ref([])
    const one = ref(0)
    const onLoad = () => {
      update()
    }

    interface IUser {
      name: string
      age: number
      height: number
    }
    type record = Record<string | number, string>

    const chen: Partial<IUser> = {
      name: '1221',
      age: 21
    }
    const song: record = {
      name: '12'
    }

    console.log(chen, song)

    const onRefresh = () => {
      // 清空列表数据

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      // loading.value = true
      onLoad()
    }

    const update = () => {
      one.value === 1 ? getNewHouseInfor() : erGetBase()
    }

    const erGetBase = async () => {
      try {
        const {
          data: {
            result: {
              records: { items }
            }
          }
        } = await erGetBaseInfor({
          bizType: 'SALE',
          pageSize: (pageSize.value += 10)
        })
        newHouseInfor.value = newHouseInfor.value.concat(items)

        one.value = 1
      } catch (error) {
        console.log(error)
      } finally {
        refreshing.value = false
      }
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
          pageSize: (pageSize.value += 10),
          param: 'o2'
        })

        newHouseInfor.value = newHouseInfor.value.concat(items)
        one.value = 0
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
