import Vue from 'vue'
import Vuex from 'vuex'
import userManage from './user'
import home from './home'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userManage,
    home
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
})

export default store
