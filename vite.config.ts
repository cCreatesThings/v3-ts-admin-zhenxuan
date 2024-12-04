import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default ({ command }: { command: string }) => {
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dts: true // 自动生成类型声明文件
      }),
      viteMockServe({
        localEnabled: command === 'serve'
      }),
      // svg图标配置
      createSvgIconsPlugin({
        iconDirs: [
          fileURLToPath(new URL('./src/assets/icons', import.meta.url))
        ],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/index.scss" as *;`
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
    // server: {
    //   proxy: {
    //     // 将所有以 /api 开头的请求代理到
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       changeOrigin: true, // 如果后端服务使用了不同的主机名，这会更改源主机
    //       rewrite: (path) => path.replace(/^\/api/, '') // 可选：去除路径中的 /api 前缀
    //     }
    //   }
    // }
  })
}
