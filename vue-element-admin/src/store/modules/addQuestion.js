import { getType, getSubject, getQuestionsType, allExam, searchExam } from '@/api/addQuestion'
const state = {
  allQuestion: [],
  examType: [],
  subjectType: [],
  questionsType: [],
  detail: {}
}
const mutations = {
  updataState(state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  }
}
const actions = {
  // 获取所有的考试类型
  async getExamType({ commit }, payload) {
    var result = await getType()
    commit('updataState', { examType: result.data })
    console.log(result)
  },
  // 获取所有的课程
  async getSubjectType({ commit }, paylod) {
    var result = await getSubject()
    commit('updataState', { subjectType: result.data })
    console.log(result)
  },
  // 获取所有的试题类型 addQuestion,
  async getQuestionsTpe({ commit }, paylod) {
    var result = await getQuestionsType()
    commit('updataState', { questionsType: result.data })
    console.log(result, 'snf')
  },
  // 获取所有的试题
  async getAllExam({ commit }, payload) {
    var result = await allExam()
    commit('updataState', { allQuestion: result.data })
    console.log(result, 'alllll/...')
  },
  // 按条件获取试题
  async getRightExam({ commit }, payload) {
    var result = await searchExam(payload)
    commit('updataState', { allQuestion: result.data })
    console.log(result, 'alllll/...')
  },
  // 获取详情信息
  async getDetail({ commit }, payload) {
    commit('updataState', { detail: payload })
    console.log(payload, 'alllll/...')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
