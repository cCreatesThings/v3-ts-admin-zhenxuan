<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
// 进入页面就获取用户信息
const getUserInfo = async () => {
  await userStore.setUserInfo()
}
getUserInfo()
</script>
<template>
  <div class="home">我是home</div>
  <SvgIcon name="lock" color="skyblue" />
  <el-button type="success">click</el-button>
  <el-card header="hello world!!!">李江涛</el-card>
  <!--  <el-button @click="getTestRequest" type="danger">测试请求</el-button>-->
  <el-image :src="userStore.userInfo?.checkUser.avatar" />
</template>

<style lang="scss" scoped>
//@use '@/styles/variable.scss' as *; // 使用 * 来导入所有变量
//
//.home {
//  color: $color-primary;
//}
</style>
