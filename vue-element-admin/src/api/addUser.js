import request from '@/utils/request'

// 添加身份信息
export function addIdent(params) {
  return request({
    url: '/user/identity/edit',
    method: 'get',
    params
  })
}

// 添加api接口权限信息
export function addApi(params) {
  return request({
    url: '/user/authorityApi/edit',
    method: 'get',
    params
  })
}

// 获取已有视图权限接口
export function allView() {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}

// 添加视图权限
export function addView(params) {
  return request({
    url: '/user/authorityView/edit',
    method: 'get',
    params
  })
}

// 获取身份id
export function allIndentity() {
  return request({
    url: '/user/identity',
    method: 'get'
  })
}

// 获取api接口权限
export function apiAuth() {
  return request({
    url: '/user/api_authority',
    method: 'get'
  })
}
// 给身份设置api接口权限
export function setApi(params) {
  return request({
    url: '/user/setIdentityApi',
    method: 'post',
    data: params
  })
}

// 给身份设置视图权限
export function setView(params) {
  return request({
    url: '/user/setIdentityView',
    method: 'post',
    data: params
  })
}
