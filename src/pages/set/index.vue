
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
