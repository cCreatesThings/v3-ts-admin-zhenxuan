<script setup lang="ts">
import Logo from './components/Logo/index.vue'
import MyMenu from './components/Menu/index.vue'
import { useUserStore } from '@/stores/user'
import RightMain from './components/RightMain/index.vue'
const userStore = useUserStore()
</script>

<template>
  <el-container class="container">
    <el-aside class="aside">
      <!-- 顶部logo展示组件  -->
      <Logo />
      <!--  侧边栏导航 -->
      <el-scrollbar class="scrollbar">
        <!--  动态生成侧边导航      -->
        <MyMenu :userRoutes="userStore.userRoutes" />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header><el-card>头部</el-card></el-header>
      <el-main>
        <el-card>
          <RightMain />
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
