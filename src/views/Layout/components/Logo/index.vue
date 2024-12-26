<script setup lang="ts">
import logoInfo from '@/setting'
import { useUserStore } from '@/stores/user'
import { ref, onBeforeUnmount } from 'vue'
import dayjs from 'dayjs'

const userStore = useUserStore()
const currentTime = ref('')
const getTime = () => {
  const now = new Date()
  currentTime.value = dayjs(now).format('YYYY-MM-DD HH:mm:ss')
}
const timerId = setInterval(() => {
  getTime()
}, 1000)
onBeforeUnmount(() => {
  clearInterval(timerId)
})
</script>

<template>
  <div class="logo">
    <el-image class="img" :src="logoInfo.logo" alt="logo" />
    <div class="userinfo">
      <el-image class="avator" :src="userStore.userInfo?.checkUser.avatar" />
      <div class="userinfo-name">
        欢迎您! {{ userStore.userInfo?.checkUser.username }}
      </div>
      <div>当前时间</div>
      <div class="time">{{ currentTime }}</div>
      <div>最近一次登录时间</div>
      <div>{{ userStore.loginTime }}</div>
    </div>
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
  transition: all 0.5s;
  perspective: 500px;
  &:hover {
    scale: 1.2;
    z-index: 999;
    transform: translateZ(100px);
    box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.5);
  }
}
.img:hover ~ .userinfo {
  visibility: visible;
}
.userinfo {
  padding-top: 50px;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 50px;
  left: 20px;
  width: 180px;
  height: 200px;
  border-radius: 10px;
  background-color: #ffffff;
  .avator {
    height: 50px;
    width: 50px;
    border-radius: 100px;
  }
}
</style>
