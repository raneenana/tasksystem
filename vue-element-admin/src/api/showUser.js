import request from '@/utils/request'

export function identity() {
  return request({
    url: '/roles',
    method: 'get'
  })
}
