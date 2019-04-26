import { getUserInfo, getType, getSubject, getQuestionsType, getAddType, addQuestion, allExam, searchExam } from '@/api/addQuestion'
const state = {
  userInfo: [],
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
  // 获取当前用户信息
  async getUser({ commit }, payload) {
    var result = await getUserInfo()
    commit('updataState', { userInfo: result.data })
  },
  // 获取所有的考试类型
  async getExamType({ commit }, payload) {
    var result = await getType()
    commit('updataState', { examType: result.data })
  },
  // 获取所有的课程
  async getSubjectType({ commit }, paylod) {
    var result = await getSubject()
    commit('updataState', { subjectType: result.data })
  },
  // 获取所有的试题类型 addQuestion,
  async getQuestionsTpe({ commit }, paylod) {
    var result = await getQuestionsType()
    commit('updataState', { questionsType: result.data })
  },
  // 添加试题类型 addQuestion,
  async addType({ commit }, paylod) {
    var result = await getAddType(paylod)
    return result
    // commit('updataState', { questionsType: result.data })
  },
  // 添加试题
  async addQuestions({ commit }, paylod) {
    var result = await addQuestion(paylod)
    // commit('updataState', { questionsType: result.data })
    return result
  },
  // 获取所有的试题
  async getAllExam({ commit }, payload) {
    var result = await allExam()
    commit('updataState', { allQuestion: result.data })
  },
  // 按条件获取试题
  async getRightExam({ commit }, payload) {
    var result = await searchExam(payload)
    commit('updataState', { allQuestion: result.data })
  },
  // 获取详情信息
  async getDetail({ commit }, payload) {
    commit('updataState', { detail: payload })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
