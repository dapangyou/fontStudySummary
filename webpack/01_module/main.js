import App from './App';
import Vue from './vue';

// import { num1, num2, add } from './App.js'
// console.log(num1);
// console.log(num2);
// add(3, 5);

// 整个模块加载
// import * as obj from './App.js';
import './main.css';
new Vue({
    el: "#app",
    components: {
        App
    },
    template: '<App/>'
});