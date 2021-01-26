import Vue from 'vue'
import App from './App.vue'
import krouter from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    krouter,
    store,
    render: h => h(App)
}).$mount('#app')