import {
  addIdent,
  addApi,
  allView,
  addView,
  allIndentity,
  apiAuth
} from '@/api/addUser'
const state = {
  viewOpt: [],
  allIden: [],
  apiOpt: []
}

const mutations = {
  CHANGE_VIEWOPT: (state, payload) => {
    state.viewOpt = payload.data
  },
  CHANGE_ALLIDEN: (state, payload) => {
    state.allIden = payload.data
  },
  CHANGE_APIOPT: (state, payload) => {
    state.apiOpt = payload.data
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
  },
  // 获取身份id
  async getAllIndetity({ commit }, payload) {
    var res = await allIndentity()
    commit('CHANGE_ALLIDEN', res)
  },
  // 获取api接口信息
  async getApiAuth({ commit }, payload) {
    var res = await apiAuth()
    commit('CHANGE_APIOPT', res)
    console.log('api接口数据', res)
  },
  // 设置身份api接口权限
  async setApiAuth({ commit }, payload) {

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
