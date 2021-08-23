
//引入vue-router@4.0.0
import router from '@/router/index'

//引入重置样式表
import './styles/reset.scss'

//引入axios
import './service/index'

//引入移动端适配方案 amfe-flexible和postcss-pxtorem结合
import 'amfe-flexible'

//引入全局路由钩子
import './permission'

//引入Vuex
import { store, key } from './store'

//按需加载Vant
import app from './plugins/vant.js'

app.use(router)
app.use(store, key)
app.mount('#app')
