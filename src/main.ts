import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// svg图标配置
import 'virtual:svg-icons-register'
// pinia 持久化
import persist from 'pinia-plugin-persistedstate'

// 安装自己的注册全局组件的插件
import globalComponent from '@/components'
// 引入全局样式

const app = createApp(App)

app.use(globalComponent)
app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
