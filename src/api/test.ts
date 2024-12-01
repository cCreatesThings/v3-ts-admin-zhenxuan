import request from '@/utils/request'
import type { commonDataType } from '@/types/common_api'
import type {
  loginSuccessDataType,
  loginDataParamsType
} from '@/types/user/user'

/**
 * mock 用户登录
 * @param data
 */
export const postLoginRequestAPI = (data: loginDataParamsType) => {
  return request<commonDataType<loginSuccessDataType>>({
    method: 'POST',
    url: '/user/login',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/user/info',
    headers: {
      token: 'Admin Token'
    }
  })
}
