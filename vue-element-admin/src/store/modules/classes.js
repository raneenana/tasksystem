import { getAllClass, getAllRoom, getAllStudent, addRoom, deleteRoom, addGrade } from '@/api/classes'
const state = {
  arr: [],
  roomarr: [],
  studentarr: [],
  roomId: '',
  gradeId: ''
}
const mutations = {
  updata(state, payload) {
    for (var i in payload) {
      state[i] = payload[i]
    }
  }
}
const actions = {
  async allClass({ commit }) { // 获取所有班级
    const all = await getAllClass()
    commit('updata', { arr: all.data })
  },
  async allRoom({ commit }) { // 获取所有教室
    const room = await getAllRoom()
    commit('updata', { roomarr: room.data })
  },
  async allStudent({ commit }) { // 获取所有学生
    const obj = await getAllStudent()
    commit('updata', { studentarr: obj.data })
  },
  async allAddroom({ commit }, payload) { // 添加教室
    const obj = await addRoom(payload)
    commit('updata', { roomId: obj.room_id })
  },
  async deleteroom({ commit }, payload) {
    await deleteRoom(payload)
  },
  async addgrade({ commit }, payload) { // 添加班级
    console.log(payload)
    const obj = await addGrade(payload)
    console.log(obj)
    // commit('updata', { gradeId: obj.grade_id })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
