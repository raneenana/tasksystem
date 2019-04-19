import {
  typeExam,
  getCurriculum,
  CreateExam,
  getExamList,
  getExamDetail
} from '@/api/examination'

const state = {
  // 获取考试类型.
  examType: [],
  // 获取课程
  curriculum: [],
  // 获取试卷列表
  paperList: []
  // 获取试卷列表详情
  // detailList: []
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
  // 试卷列表
  updatePaperList(state, payload) {
    state.paperList = payload
  }
  // 获取试卷列表详情
  // updateDetailList(state, payload) {
  //   console.log(payload)
  //   state.detailList = payload
  // }
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
  // 创建试卷
  async createTestPaper({ commit }, payload) {
    const create = await CreateExam(payload)
    return create.data
  },
  // 获取试卷列表
  async getPaperList({ commit }) {
    const paper = await getExamList()
    commit('updatePaperList', paper.exam)
  },
  // 获取试卷详情
  async getPaperDetail({ commit }, payload) {
    const detail = await getExamDetail(payload)
    return detail.data.questions
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
