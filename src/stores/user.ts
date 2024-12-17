import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI } from '@/api/user'
import type { UserInfoType } from '@/types/user/user'
export const useUserStore = defineStore(
  'users',
  () => {
    // 用户信息
    const userInfo = ref<UserInfoType>()
    const token = ref('') // token

    const setUserInfo = async () => {
      //  发送获取用户信息的请求
      const res = await getUserInfoAPI(token.value)
      console.log(res)
      userInfo.value = res.data
    }
    // token
    const setToken = (newToken: string) => {
      token.value = newToken
    }
    return {
      userInfo,
      token,
      setUserInfo,
      setToken
    }
  },
  {
    persist: true
  }
)
