<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { getUserInfoAPI, postLoginRequestAPI } from '@/api/test'
const getTestRequest = async () => {
  const res = await postLoginRequestAPI({
    username: 'admin',
    password: '111111'
  })
  console.log(res.data.data.token)
  const result = await getUserInfoAPI()
  console.log(result.data.data)
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
