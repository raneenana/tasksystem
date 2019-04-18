import { addIdent, addApi, allView, addView } from '@/api/addUser'
const state = {
  viewOpt: []
}

const mutations = {
  CHANGE_VIEWOPT: (state, payload) => {
    console.log('payload....',payload)
    state.viewOpt = payload.data
  }
}

const actions = {
  // 添加身份信息
  async addIdentity({ commit }, payload) {
    var res = await addIdent(payload)
    return res
  },
  // 添加api接口权限信息
  async addApiAuth({ commit }, payload) {
    var res = await addApi(payload)
    return res
  },
  // 获取已有视图数据
  async allViewList({ commit }, payload) {
    var res = await allView()
    commit('CHANGE_VIEWOPT', res)
  },
  // 添加视图权限
  async addViewAuth({ commit }, payload) {
    var res = await addView(payload)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
