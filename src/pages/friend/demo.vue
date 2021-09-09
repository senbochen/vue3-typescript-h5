<template>
  <div v-bind="$props">
    <div>{{ userLocation }}</div>
    <div>{{ userGeolocation }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'Demo',
  setup: (props) => {
    const userLocation = inject('location')
    const userGeolocation = inject('geolocation')
    console.log(userLocation, userGeolocation, props)
    return {
      userLocation,
      userGeolocation
    }
  }
})
</script>
<style lang="less" scoped>
</style>
