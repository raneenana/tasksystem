import request from '@/utils/request'

export function getAllClass() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}
export function getAllRoom() {
  return request({
    url: '/manger/room',
    method: 'get'
  })
}
