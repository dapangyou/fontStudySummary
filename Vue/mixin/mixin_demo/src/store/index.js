import Vuex from 'vuex';
export default new Vuex.Store({
    state: {
        num: 999,
    },
    mutations: {
        add(state) {
            state.num++;
         }
    },
    actions: {
        addByAct({ commit }) {
            commit('add');
         }
    },
    getters: {
        getNum(state) { 
            return state.num;
        }
    },
    modules: {}
});