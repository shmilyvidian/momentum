import Vue from 'vue'
import Vuex from 'vuex'
import userManage from './user'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userManage
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
})

export default store
