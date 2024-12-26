import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI } from '@/api/user'
import type { UserInfoType } from '@/types/user/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { routes } from '@/router/routes'
export const useUserStore = defineStore(
  'users',
  () => {
    // 用户信息
    const userInfo = ref<UserInfoType>()
    const token = ref('') // token
    const loginTime = ref('') // 用户最近一次登录时间
    // 用户路由
    const userRoutes = routes

    const setUserInfo = async () => {
      //  发送获取用户信息的请求
      const router = useRouter()
      const res = await getUserInfoAPI(token.value)
      // 获取用户信息失败 replace到login页面重新登录
      if (res.code === 201) {
        await router.replace('/login')
        return ElMessage.error('请重新登录')
      }
      userInfo.value = res.data
    }
    // token
    const setToken = (newToken: string) => {
      token.value = newToken
    }
    // loginTime
    const setLoginTime = (time: string) => {
      loginTime.value = time
    }
    return {
      userInfo,
      token,
      loginTime,
      userRoutes,
      setUserInfo,
      setToken,
      setLoginTime
    }
  },
  {
    persist: true
  }
)
