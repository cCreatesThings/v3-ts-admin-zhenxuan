<script setup lang="ts">
import logoInfo from '@/setting'
</script>

<template>
  <div class="logo">
    <el-image class="img" :src="logoInfo.logo" alt="logo" />
    <h2>{{ logoInfo.title }}</h2>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
