import Vue from 'vue';
import Vuex from 'vuex';

// 1.安装插件
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 保存状态
        counter: 1000,
        students: [
            {id: 110,mame: "11",age:21},
            { id: 111, mame: "22", age: 22 },
            { id: 112, mame: "33", age: 23 },
            {id: 113,mame: "44",age:18},
        ],
        info: {
            name: "ppppp"
        }
    },
    mutations: {
        // 同步操作
        increment(state) { 
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementCount(state,count) { 
            state.counter += count;
        },
        addStudent(state) { 
            const stu = {
                id: 115,name: "haha",age: 100
            }
            state.students.push(stu);
        },
        updateInfo(state) { 
            state.info.name = "coder";
        }
    },
    actions: {
        // 
        aUpdateInfo(context) { 
            setTimeout(() => { 
                context.commit('updateInfo');
            },1000)
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter;
        },
        more20Stu(state) {
            return state.students.filter(item => item.age > 20)
        },
        more20StuLength(state,getters) { 
            return getters.more20Stu.length;
        },
        moreAgeStu(state) { 
            return age=> { 
                return state.students.filter(item=>item.age > age);
            }
        }
    },
    modules: {
        a: {
            state: {},
            mutations: {},
            actions: {},
            getters: {}
        },
        b: {}
    }
});

export default store;