import Vue from 'vue'
import App from './App'
import router from './router'
import LyTab from "ly-tab";
// import axios from 'axios';
import store from './store';

Vue.use(LyTab);
Vue.config.productionTip = false
    // Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})