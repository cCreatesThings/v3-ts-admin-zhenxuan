<script setup lang="ts"></script>

<template>
  <el-container class="container">
    <el-aside class="aside">
      <el-card>侧边导航</el-card>
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
.container {
  width: 100%;
  height: 100vh;
}
.aside {
  height: 100vh;
  .el-card {
    height: 100%;
  }
}
</style>
