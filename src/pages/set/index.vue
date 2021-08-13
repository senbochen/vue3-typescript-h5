<!--
 * @Author: your name
 * @Date: 2021-08-13 17:57:31
 * @LastEditTime: 2021-08-13 18:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-typescript-template/src/pages/Friend/index.vue
-->
<template>
  <div class="wrap">
    {{ state.username }}
    {{ state.password }}
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
const Set = defineComponent({
  name: 'Set',
  setup () {
    const state = reactive({
      username: '端口',
      password: '23元',
    })
    return {
      state
    }
  }
})
export default Set

</script>
<style>
</style>
