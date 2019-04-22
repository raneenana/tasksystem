import {
  classInfo
} from '@/api/readPapers'

const state = {

}
const mutations = {

}
const actions = {
  // 获取已经分配教室的班级,得到待批班级的信息
  async getExamType({ commit }) {
    const getClassInfo = await classInfo()
    console.log(getClassInfo)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
