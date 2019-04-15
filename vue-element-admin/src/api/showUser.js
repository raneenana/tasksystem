import request from '@/utils/requests'

export let idenity = () => {
  return request({
    url: "/user/idenity"
  })
}