
<template>
  <div class="common-container">
    {{ state.username }}
    {{ state.password }}
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
const Friend = defineComponent({
  name: 'Friend',
  setup () {
    const state = reactive({
      username: '衬衫',
      password: '32元',
    })
    return {
      state
    }
  }
})
export default Friend

</script>
<style>
</style>
