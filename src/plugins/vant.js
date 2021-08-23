
import { createApp } from 'vue'
import { Button, Swipe, SwipeItem, Image as VanImage, Form, Field, CellGroup, Toast, Tabbar, TabbarItem, Skeleton, Icon } from 'vant'
import App from '../App.vue'
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

export default app
