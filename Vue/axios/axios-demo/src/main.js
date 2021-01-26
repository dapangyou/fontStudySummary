import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

axios.defaults.baseURL = "";
axios.defaults.timeout = 3000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios({
  // url: 'http://123.207.32.32:8000/home/multidata',
  // method: 'GET',
  // data: {

  // }
  url: "http://123.207.32.32:8000/home/data?type=sell&page=3",
  params: {

  }

}).then(res => { 
  console.log(res);
});
