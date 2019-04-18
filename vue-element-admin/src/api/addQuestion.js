import request from '@/utils/request'
// 获取考试类型
export function getType() {
  return request({
    url: '/exam/examType',
    method: 'get'
  })
}
// 获取所有的课程
export function getSubject() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}
// 获取所有的试题类型
export function getQuestionsType() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get'
  })
}

export function addQuestion(params) {
  return request({
    url: '/exam/questions',
    method: 'post',
    params
  })
}
// 获取所有的试题
export function allExam(params) {
  return request({
    url: '/exam/questions/new',
    method: 'get',
    params
  })
}

// 获取所有的试题
export function searchExam(params) {
  return request({
    url: '/exam/questions/condition',
    method: 'get',
    params
  })
}
