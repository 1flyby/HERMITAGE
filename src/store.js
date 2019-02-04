import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      status: false,
      login: 'default',
      pwd: 'default',
    }
  },
  mutations: {
    login(state) {
      state.user.status = !state.user.status;
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
