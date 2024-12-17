import request from '@/utils/request'
import type { commonDataType } from '@/types/common_api'
import type {
  loginSuccessDataType,
  loginDataParamsType,
  UserInfoType
} from '@/types/user/user'

/**
 * mock 用户登录
 * @param data
 */
export const postLoginRequestAPI = (data: loginDataParamsType) => {
  // 第一个泛型参数是请求参数的类型
  // 第二个泛型参数是返回值的类型
  return request<loginDataParamsType, commonDataType<loginSuccessDataType>>({
    method: 'POST',
    url: '/user/login',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfoAPI = (token: string) => {
  return request<never, commonDataType<UserInfoType>>({
    url: '/user/info',
    headers: {
      token
    }
  })
}
