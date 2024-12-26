<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineProps(['userRoutes'])
// 工具方法：展开 layout 的 children
function flattenRoutes(routes: RouteRecordRaw[]) {
  return routes.flatMap((route) => {
    // 直接返回layout的 children
    return route.name === 'layout' && route.children ? route.children : route
  })
}
</script>
<script lang="ts">
export default {
  name: 'MyMenu'
}
</script>

<template>
  <el-menu background-color="#efefef">
    <!-- 渲染无嵌套的路由    -->
    <template v-for="item in flattenRoutes(userRoutes)" :key="item.path">
      <el-menu-item v-if="!item.children && !item.meta?.hidden">
        {{ item.meta?.title }}
      </el-menu-item>
      <!--   渲染有children属性的路由  -->
      <el-sub-menu
        v-if="item.children && !item.meta?.hidden"
        :index="item.path"
        :key="item.path"
      >
        <template #title>{{ item.meta?.title }}</template>
        <!--  递归组件  -->
        <MyMenu :userRoutes="item.children" />
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped lang="scss"></style>
