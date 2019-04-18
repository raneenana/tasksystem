import { getAllClass } from '@/api/classes'
const state = {

}
const mutations = {

}
const actions = {
  allClss({ commit, state }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getAllClass()
      // console.log(data)
      resolve(data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
