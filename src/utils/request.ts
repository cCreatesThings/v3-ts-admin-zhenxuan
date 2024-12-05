import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  <T>(res: AxiosResponse<T>): T => {
    // 响应状态码判断
    if (
      (res.data as { code: number }).code < 200 ||
      (res.data as { code: number }).code >= 300
    ) {
      const response = res.data as {
        code: number
        data: Record<string, unknown>
      }
      ElMessage.error(response.data.message || '出现错误')
      throw new Error(
        typeof response.data?.message === 'string'
          ? response.data?.message
          : 'API response error'
      )
    }
    return res.data
  },
  (error) => {
    if (error.response.status === 401) {
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default request
