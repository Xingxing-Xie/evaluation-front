import request from '@/utils/request'

export function submitIndexSurvey(data) {
  return request({
    url: `/index/survey`,
    method: 'post',
    data: {
      result: data
    }
  })
}

export function submitProcessSurvey(data) {
  return request({
    url: `/survey`,
    method: 'post',
    data: {
      result: data
    }
  })
}
