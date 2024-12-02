// import type { commonDataType } from '@/types/common_api'

/** 登录接口需要的参数 */
interface loginDataParamsType {
  username: string
  password: string
}
/** 登录接口返回的数据类型 */
export interface loginSuccessDataType {
  token: string
}

/** 用户信息返回值类型 */
export interface UserInfoType {
  checkUser: {
    // 用户ID
    userId: number
    // 头像，URL类型字符串
    avatar: string
    // 用户名
    username: string
    // 密码
    password: string
    // 描述
    desc: string
    // 角色，字符串数组
    roles: string[]
    // 按钮权限，字符串数组
    buttons: string[]
    // 路由权限，字符串数组
    routes: string[]
    // token，字符串
    token: string
  }
}
