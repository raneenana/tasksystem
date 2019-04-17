import {
  typeExam,
  getCurriculum,
  CreateExam,
  getExamList
} from '@/api/examination'

const state = {
  // 获取考试类型.
  examType: [],
  // 获取课程
  curriculum: [],
  createExam: [],
  examList: []
}
const mutations = {
  // 考试类型
  updateTypeExam(state, payload) {
    state.examType = payload
  },
  // 课程
  updateCurriculum(state, payload) {
    state.curriculum = payload
  },
  updateTestPaper(state, payload) {
    state.createExam = payload
  },
  updateExamList(state, payload) {
    state.examList = payload
  }
}
const actions = {
  // 考试类型
  async getExamType({ commit }) {
    const getType = await typeExam()
    commit('updateTypeExam', getType.data)
  },
  // 获取所有课程
  async getCurriculums({ commit }) {
    const curriculums = await getCurriculum()
    commit('updateCurriculum', curriculums.data)
  },
  async createTestPaper({ commit }) {
    const create = await CreateExam()
    commit('updateTestPaper', create.data)
  },
  async allExamList({ commit }) {
    const all = await getExamList()
    commit('updateExamList', all.exam)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
