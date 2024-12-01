import axios from 'axios'

console.log(import.meta.env.VITE_APP_BASE_API)
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
  (res) => {
    return res
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default request
