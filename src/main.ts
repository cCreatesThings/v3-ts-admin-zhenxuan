import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// svg图标配置
import 'virtual:svg-icons-register'

// 安装自己的注册全局组件的插件
import globalComponent from '@/components'
// 引入全局样式

import '@/styles/index.scss'
const app = createApp(App)

app.use(globalComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
