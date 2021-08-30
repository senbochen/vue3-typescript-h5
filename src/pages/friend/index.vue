
<template>
  <div class="common-container">
    <PullUpRefresh @update="updateData">
      <ul>
        <li v-for="item in newHouseInfor" :key="item.createTimeDesc">
          <span
            >{{ item.cityDesc }} - {{ item.decorationDesc }} -
            {{ item.newPropertyTypeDesc }}</span
          >
        </li>
      </ul>
    </PullUpRefresh>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
import { useRouter } from 'vue-router'
import { getNewHouse } from '@/api/index'
import PullUpRefresh from '@/components/pullUpRefresh/index.vue'
const Friend = defineComponent({
  name: 'Friend',
  components: { PullUpRefresh },
  setup () {
    const store = useStore()
    const router = useRouter()
    const newHouseInfor = ref({})
    const updateData = async () => {
      console.log('上拉加载刷新')
      const data = await getNewHouseInfor(40)
      newHouseInfor.value = newHouseInfor.value.concat(data)
      console.log(data)
    }

    const getNewHouseInfor = async (pageSize = 20) => {
      try {
        const { data: { result: { records: { items } } } } = await getNewHouse({
          bizType: 'NEWHOUSE',
          pageSize
        })

        return items

      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      const data = await getNewHouseInfor()

      newHouseInfor.value = data
    })


    const logout = () => {
      store.commit(MutationsEnum.RemoveToken)
      router.push('/login')
    }
    return {
      newHouseInfor,
      logout,
      updateData
    }
  }
})
export default Friend

</script>
<style>
span {
  font-size: 12px;
}
</style>
