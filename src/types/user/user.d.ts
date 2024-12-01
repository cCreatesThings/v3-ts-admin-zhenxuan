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
