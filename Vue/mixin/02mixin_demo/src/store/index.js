import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 999
  },
  mutations: {
    add(state) { 
      state.num++;
    }
  },
  actions: {
    // 发起异步请求
    addByAct({ commit}) {
      commit('add');
    }
  },
  getters: {
    getNum(state) { 
      return state.num;
    }
  },
  modules: {
  }
})
