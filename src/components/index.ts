//  注册为全局组件的插件

import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon.vue'
const allGlobalComponent: Record<string, Component> = { SvgIcon }
const keys = Object.keys(allGlobalComponent)

export default {
  install(app: App) {
    keys.forEach((key) => {
      app.component(
        key,
        allGlobalComponent[key as keyof typeof allGlobalComponent]
      )
    })
  }
}
