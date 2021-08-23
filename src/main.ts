
import router from '@/router/index'
import './styles/reset.scss'
import './service/index'
import 'amfe-flexible'
import './permission'
import { store, key } from './store'
import app from './plugins/vant.js'

console.log(app)
app.use(router)
app.use(store, key)
app.mount('#app')
