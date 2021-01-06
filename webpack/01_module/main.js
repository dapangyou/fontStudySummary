// import App from './App';
import Vue from './vue';

// import { num1, num2, add } from './App.js'
// console.log(num1);
// console.log(num2);
// add(3, 5);

// 整个模块加载
import * as obj from './App.js';
console.log(obj.num1);
console.log(obj.num2);
console.log(obj.add(3, 5));
console.log(333);

new Vue({
    el: "#app",
    components: {
        App: obj.default
    },
    template: '<App/>'
});