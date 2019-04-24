import { getAllClass, getAllRoom, getAllStudent, addRoom, deleteRoom, addGrade, deleteGrade, deleteStudent, updateGrade } from '@/api/classes'
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
  async deleteroom({ commit }, payload) { // 删除教室
    await deleteRoom(payload)
  },
  async addgrade({ commit }, payload) { // 添加班级
    console.log('添加班级', payload)
    const obj = await addGrade(payload)
    console.log(obj)
    return obj
  },
  async deletegrade({ commit }, payload) { // 删除班级
    const obj = await deleteGrade(payload)
    console.log(obj)
  },
  async updategrade({ commit }, payload) { // 更新班级
    console.log(payload)
    const obj = await updateGrade(payload)
    console.log(obj)
  },
  async deletestudent({ commit }, payload) { // 删除学生
    console.log('删除学生', payload)
    const obj = await deleteStudent(payload)
    console.log(obj)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
