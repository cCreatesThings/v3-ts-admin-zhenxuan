import request from '@/utils/request'

export const getTestRequestAPI = () => {
  return request({
    url:'/api/channels'
  })
}
