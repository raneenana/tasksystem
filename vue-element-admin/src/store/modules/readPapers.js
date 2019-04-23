import {
  classInfo,
  getStudent
} from '@/api/readPapers'

const state = {
  classArr: [],
  studentData: []
}
const mutations = {
  CHANGE_CLASS(state, payload) {
    state.classArr = payload.data
  },
  CHANGE_DATA(state, payload) {
    console.log('payload......', payload)
    if (!payload) {
      state.studentData = []
    } else {
      if (payload.code === 1) {
        state.studentData = payload.exam
      }
    }
  }
}
const actions = {
  // 获取已经分配教室的班级,得到待批班级的信息
  async getExamType({ commit }) {
    const getClassInfo = await classInfo()
    commit('CHANGE_CLASS', getClassInfo)
  },
  // 获取学生试卷列表
  async getStudentList({ commit }, payload) {
    const studentData = await getStudent(payload)
    commit('CHANGE_DATA', studentData)
    // console.log(studentData)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
