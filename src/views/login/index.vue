
<template>
  <div class="login-wrap">
    <van-form @submit="onSubmit" style="align-self: center">
      <van-cell-group inset>
        <van-field
          v-model="state.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useStore } from '@/store/index'
import { MutationsEnum } from '@/store/mutation-types'
import { useRouter } from 'vue-router'
const Login = defineComponent({
  name: 'Login',
  setup () {
    const state = reactive({
      username: '',
      password: '',
    })
    const store = useStore()
    const router = useRouter()
    const onSubmit = () => {
      store.commit(MutationsEnum.AddToken, { token: state.username })
      router.push('/home')
    }

    return {
      state,
      onSubmit,
    }
  }
})
export default Login

</script>
<style scoped lang='scss'>
.login-wrap {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url('https://d301.paixin.com/thumbs/5988232/105195316/staff_1024.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
