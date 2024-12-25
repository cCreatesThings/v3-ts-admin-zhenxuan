<script setup lang="ts">
import Logo from './components/Logo/index.vue'
</script>

<template>
  <el-container class="container">
    <el-aside class="aside">
      <!--      <el-card>-->
      <!-- 顶部logo展示组件  -->
      <Logo />
      <!--        侧边栏导航 -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#efefef">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
      <!--      </el-card>-->
    </el-aside>
    <el-container>
      <el-header><el-card>头部</el-card></el-header>
      <el-main>
        <el-card>
          <RouterView />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
@use '@/styles/variable' as *;
.container {
  width: 100%;
  height: 100vh;
}
.aside {
  height: 100vh;
  box-shadow:
    0 12px 32px 4px rgba(0, 0, 0, 0.04),
    0 8px 20px rgba(0, 0, 0, 0.08);
  .el-card {
    height: 100%;
    background-color: $base-sideNavBar-bgColor;
  }
  .scrollbar {
    height: calc(100vh - 100px);
  }
}
</style>
