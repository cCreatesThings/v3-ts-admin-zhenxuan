// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/vite@5.4.10_@types+node@20.17.5_sass@1.81.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_@types+node@20.17.5_sass@1.81.0__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/unplugin-auto-import@0.18.3_@vueuse+core@9.13.0_vue@3.5.12_typescript@5.6.3___rollup@4.24.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_rollup@4.24.3_vue@3.5.12_typescript@5.6.3_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_rollup@4.24.3_vue@3.5.12_typescript@5.6.3_/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.10_@types+node@20.17.5_sass@1.81.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///D:/Users/Desktop/guigu-zhenxuan/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@4.24.3_vite@5.4.10_@types+node@20.17.5_sass@1.81.0_/node_modules/vite-plugin-mock/dist/index.js";
let __vite_injected_original_import_meta_url = "file:///D:/Users/Desktop/guigu-zhenxuan/vite.config.ts";
let vite_config_default = ({ command }) => {
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver({
          importStyle: "sass"
        })]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: true
        // 自动生成类型声明文件
      }),
      viteMockServe({
        localEnabled: command === "serve"
      }),
      // svg图标配置
      createSvgIconsPlugin({
        iconDirs: [
          fileURLToPath(new URL("./src/assets/icons", __vite_injected_original_import_meta_url))
        ],
        symbolId: "icon-[dir]-[name]"
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/variable.scss";
          `
        }
      }
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
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
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxEZXNrdG9wXFxcXGd1aWd1LXpoZW54dWFuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxEZXNrdG9wXFxcXGd1aWd1LXpoZW54dWFuXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Vc2Vycy9EZXNrdG9wL2d1aWd1LXpoZW54dWFuL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kIH06IHsgY29tbWFuZDogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgaW1wb3J0U3R5bGU6ICdzYXNzJ1xyXG4gICAgICAgIH0pXVxyXG4gICAgICB9KSxcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgICAgICBkdHM6IHRydWUgLy8gXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2XHJcbiAgICAgIH0pLFxyXG4gICAgICB2aXRlTW9ja1NlcnZlKHtcclxuICAgICAgICBsb2NhbEVuYWJsZWQ6IGNvbW1hbmQgPT09ICdzZXJ2ZSdcclxuICAgICAgfSksXHJcbiAgICAgIC8vIHN2Z1x1NTZGRVx1NjgwN1x1OTE0RFx1N0Y2RVxyXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgaWNvbkRpcnM6IFtcclxuICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvYXNzZXRzL2ljb25zJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nXHJcbiAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgICAgQHVzZSBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNlcnZlcjoge1xyXG4gICAgLy8gICBwcm94eToge1xyXG4gICAgLy8gICAgIC8vIFx1NUMwNlx1NjI0MFx1NjcwOVx1NEVFNSAvYXBpIFx1NUYwMFx1NTkzNFx1NzY4NFx1OEJGN1x1NkM0Mlx1NEVFM1x1NzQwNlx1NTIzMFxyXG4gICAgLy8gICAgICcvYXBpJzoge1xyXG4gICAgLy8gICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIC8vICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSwgLy8gXHU1OTgyXHU2NzlDXHU1NDBFXHU3QUVGXHU2NzBEXHU1MkExXHU0RjdGXHU3NTI4XHU0RTg2XHU0RTBEXHU1NDBDXHU3Njg0XHU0RTNCXHU2NzNBXHU1NDBEXHVGRjBDXHU4RkQ5XHU0RjFBXHU2NkY0XHU2NTM5XHU2RTkwXHU0RTNCXHU2NzNBXHJcbiAgICAvLyAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpIC8vIFx1NTNFRlx1OTAwOVx1RkYxQVx1NTNCQlx1OTY2NFx1OERFRlx1NUY4NFx1NEUyRFx1NzY4NCAvYXBpIFx1NTI0RFx1N0YwMFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIH0pXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UixTQUFTLGVBQWUsV0FBVztBQUMxVCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxxQkFBcUI7QUFQK0ksSUFBTSwyQ0FBMkM7QUFTOU4sSUFBTyxzQkFBUSxDQUFDLEVBQUUsUUFBUSxNQUEyQjtBQUNuRCxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CO0FBQUEsVUFDOUIsYUFBYTtBQUFBLFFBQ2YsQ0FBQyxDQUFDO0FBQUEsTUFDSixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxRQUNqQyxLQUFLO0FBQUE7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNaLGNBQWMsWUFBWTtBQUFBLE1BQzVCLENBQUM7QUFBQTtBQUFBLE1BRUQscUJBQXFCO0FBQUEsUUFDbkIsVUFBVTtBQUFBLFVBQ1IsY0FBYyxJQUFJLElBQUksc0JBQXNCLHdDQUFlLENBQUM7QUFBQSxRQUM5RDtBQUFBLFFBQ0EsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxRQUdsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFXRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
