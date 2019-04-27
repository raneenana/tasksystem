import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

export function getViewAuthority(params) {
  return request({
    url: '/user/new',
    method: 'get',
    params
  })
}

export function getNew(data) {
  return request({
    url: '/user/new',
    method: 'get',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

