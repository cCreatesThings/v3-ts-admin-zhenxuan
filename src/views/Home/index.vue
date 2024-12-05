<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { getUserInfoAPI, postLoginRequestAPI } from '@/api/user'
import { ref } from 'vue'
import type { UserInfoType } from '@/types/user/user'
const userinfo = ref<UserInfoType>({} as UserInfoType)
const getTestRequest = async () => {
  const res = await postLoginRequestAPI({
    username: 'admin',
    password: '111111'
  })
  console.log(res)
  const result = await getUserInfoAPI()
  userinfo.value = result.data
}
</script>
<template>
  <div class="home">我是home</div>
  <SvgIcon name="lock" color="skyblue" />
  <el-button type="success">click</el-button>
  <el-card header="hello world!!!">李江涛</el-card>
  <el-button @click="getTestRequest" type="danger">测试请求</el-button>
  <el-image :src="userinfo.checkUser?.avatar" />
</template>

<style lang="scss" scoped>
//@use '@/styles/variable.scss' as *; // 使用 * 来导入所有变量
//
//.home {
//  color: $color-primary;
//}
</style>
