import request from '@/utils/request'

// 获取已经分配教室的班级,得到待批班级的信息
export function classInfo() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}
// 获取学生试卷列表
export function getStudent(data) {
  return request({
    url: '/exam/student?grade_id=' + data,
    method: 'get'
  })
}
