import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: '北京',
    userName: ''
  },
  mutations: {
    address (state, address) {
      state.address = address
    },
    setUserName (state, userName) {
      state.userName = userName
    },
    relogin (state) {
      state.userName = ''
    }
  },
  actions: {},
  modules: {}
})
