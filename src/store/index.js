import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scroll: {
      y: 0,
      direction: "none"
    }
  },
  getters: {},
  mutations: {
    setScrollY(state, y) {
      state.scroll.direction = y>state.scroll.y ? "bottom" : "top"
      state.scroll.y = y
      console.log(state.scroll.y)
    }
  }
  ,
  actions: {},
  modules: {}
})
