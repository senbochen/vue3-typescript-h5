
<template>
  <div class="common-container">
    <PullDownRefresh @update="update">
      <ul>
        <li v-for="item in newHouseInfor" :key="item.createTimeDesc">
          <div v-if="item.model" style="padding: 10px">
            <van-image
              width="2rem"
              height="2rem"
              fit="cover"
              :src="item.model.pictureUrl + '-f300x225'"
            />
            <span>类型：{{ item.decorationDesc }}</span>
            <span>状态：{{ item.saleStatusDesc }}</span>
            <p>{{ item.model.garden.address }}</p>
          </div>

          <div v-else>
            <van-image
              width="6rem"
              height="6rem"
              fit="cover"
              :src="item.pictureUrl + '-f300x225'"
            />
            <p>{{ item.title }}</p>
          </div>
        </li>
      </ul>
    </PullDownRefresh>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { useFormatTodayTime } from '@/hooks/index'
import { getNewHouse, erGetBaseInfor, newsList } from '@/api/index'
import PullDownRefresh from '@/components/pullDownRefresh/index.vue'
const Set = defineComponent({
  name: 'Set',
  components: { PullDownRefresh },
  setup() {
    const useFormat = useFormatTodayTime(new Date().getTime())
    const newHouseInfor = ref({})
    const one = ref(0)
    const update = () => {
      one.value === 1 ? getNewHouseInfor() : erGetBase()
    }

    const getJoke = async () => {
      try {
        const {
          data: { data }
        } = await newsList({ name: '广东省_深圳市', page: 1 })
        // newHouseInfor.value = data
        console.log('data=====', data)
      } catch (error) {
        console.log(error)
      }
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
          pageSize: 30
        })
        newHouseInfor.value = items
        one.value = 1
      } catch (error) {
        console.log(error)
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
          pageSize: 15,
          param: 'o2'
        })

        newHouseInfor.value = items
        one.value = 0
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(() => {
      getNewHouseInfor()
      getJoke()
    })
    return {
      newHouseInfor,
      useFormat,
      getNewHouseInfor,
      update,
      erGetBase,
      getJoke
    }
  }
})
export default Set
</script>
<style>
p {
  font-size: 12px;
  padding: 0;
  margin: 0;
}
span {
  font-size: 12px;
}
</style>
