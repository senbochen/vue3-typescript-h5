
import app from './createApp'
//一个轻量、可拓展、针对手机网页的前端开发者调试面板。
import VConsole from 'vconsole'

//引入vue-router@4.0.0
import router from '@/router/index'

//引入样式表
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
import './plugins/vant.js'

//开发环境下加载开发者调试面板。
if (process.env.NODE_ENV === 'development') {
  new VConsole()
}

//引入全局指令
import './directives/index'


app.use(router)
  .use(store, key)
  .mount('#app')
