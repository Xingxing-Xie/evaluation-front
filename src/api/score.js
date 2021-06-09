import request from '@/utils/request'

export function getScore() {
  return request({
    url: `/score`,
    method: 'get'
  })
}
