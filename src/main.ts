
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import './styles/reset.scss'
import './service/index'
import 'amfe-flexible'
import { store, key } from './store'
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Image as VanImage } from 'vant'
import { Toast } from 'vant'
const app = createApp(App)
app.use(Button)
app.use(Swipe)
app.use(Toast)
app.use(SwipeItem)
app.use(VanImage)
app.use(router)
app.use(store, key)
app.mount('#app')
