import request from '@/utils/request'

export function getWeights() {
  return request({
    url: `/weight`,
    method: 'get'
  })
}
