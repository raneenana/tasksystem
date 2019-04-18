import { showUser, identity } from '@/api/showUser'

const state = {
  dateList: [],
  identity: {}
}

const mutations = {
  CHANGE_DATELIST: (state, token) => {
    state.dateList = token.data
  }
}
const actions = {
  async dateList({ commit }, payload) {
    var res = await showUser()
    commit('CHANGE_DATELIST', res)
  },
  async identity({ commit }, payload) {
    var res = await identity()
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
