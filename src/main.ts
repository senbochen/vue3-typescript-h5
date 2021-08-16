
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import './styles/reset.scss'
import './service/index'
import 'amfe-flexible'
import './permission'
import { store, key } from './store'
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Image as VanImage } from 'vant'
import { Form, Field, CellGroup } from 'vant'
import { Toast } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import { Skeleton } from 'vant'
import { Icon } from 'vant'
const app = createApp(App)
app.use(Form)
app.use(Skeleton)
app.use(Field)
app.use(CellGroup)
app.use(Icon)
app.use(Button)
app.use(Swipe)
app.use(Toast)
app.use(SwipeItem)
app.use(VanImage)
app.use(Tabbar)
app.use(TabbarItem)
app.use(router)
app.use(store, key)
app.mount('#app')
