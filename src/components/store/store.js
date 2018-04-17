import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    ScreenSize: false
  },
  mutations: {
    setScreenSize (state, ScreenSize) {
      state.ScreenSize = ScreenSize
      if (ScreenSize) {
        state.ScreenSize = true
      } else {
        state.ScreenSize = false
      }
    },
  },
  actions: {
    setScreenSize ({commit}, ScreenSize) {
      commit('setScreenSize', ScreenSize)
    }
  }
})
