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
    methos: 'get',
    params
  })
}

// 获取已有视图权限接口
export function allView(params) {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}

//添加视图权限
export function addView(params) {
  return request({
    url: '/user/authorityView/edit',
    method: 'get',
    params
  })
}
