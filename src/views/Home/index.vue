<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { getTestRequestAPI } from '@/api/test'
const getTestRequest = async () => {
  const res = await getTestRequestAPI()
  console.log(res)
}
</script>
<template>
  <div class="home">我是home</div>
  <SvgIcon name="home" color="red" />
  <el-button type="success">click</el-button>
  <el-card header="hello world!!!">李江涛</el-card>
  <el-button @click="getTestRequest">测试请求</el-button>
</template>

<style lang="scss" scoped>
@use '@/styles/variable.scss' as *; // 使用 * 来导入所有变量

.home {
  color: $color-primary;
}
</style>
