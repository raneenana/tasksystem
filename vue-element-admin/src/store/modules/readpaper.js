import { request } from "https";

// 获取没有分配教室的班级
export function getClass() {
    return request({
        url: '/manger/grade/new',
        method: 'get'
    })
}