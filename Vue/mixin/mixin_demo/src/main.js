import Vue from 'vue'
import App from './App.vue'
import myPlugin from './myPlugin.js';
import store from "./store"
// import Son from './Son.vue';
// import myMixin from "../my_mixin.js";

// Vue.component(Son.name, Son);
// 所有的Vue的实例继承
// Vue.mixin(myMixin);

// 插件Vue.use 插件需要具备install函数

Vue.use(myPlugin);
new Vue({
  el: '#app',
  store,
  // render: h => h(App)
  render: function (h) {
    return h(App)    //根据组件创建DOM
   }
})
