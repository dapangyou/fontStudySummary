// import React from 'react';
// import ReactDOM, { render } from 'react-dom';
// import Dialog from './component/Dialog';
// let root = document.querySelector("#root");

// ReactDOM.render( < div > {
//         /* 注释：调取组件 调取组件只需要把组件当作一个标签调取使用即可 
//                 单闭合双闭合标签都可以

//                 属性值不是字符串  我们需要使用大括号包起来

//                 props 变量存储的值是一个对象 包含调取组件时候传递的属性值
//             */
//     } <
//     Dialog con = "哈哈哈" / >
//     <
//     Dialog con = "嘿嘿嘿"
//     lx = { 2 } > < /Dialog> < /
// div > , root);

// class Dialog extends React.Component {
//     constructor() {
//         // es
//         super();
//     }

//     render() {
//         return <section >
//             <
//             h3 > 系统提示 < /h3> <
//         div > < /div> < /
//         section > ;
//     }
// }

// ReactDOM.render( < div >
//         <
//         Dialog / >
//         <
//         /div>,root)
//         let obj = {
//             type: "div",
//             props: {
//                 children: [{
//                     type: Dialog,
//                     props: {
//                         lx: 2
//                     }
//                 }]
//             }
//         }
// import Test1 from './test.js'
// console.log('我被加载了');
// console.log('默认导入', Test1);

// import { num, age } from './test2.js';
// console.log(num, age);
// 按需导出
// 先定义再导出 
// let num = 1;  export { num }
// 定义加导出
//  export let num = 2;

// 全体导入
// import * as obj from "./test3.js"
// console.log(obj);
// import "./instance_static_prop.js"


// class Obj1 {

//     static staticAge = 999;
//     static staticFn = function() {
//         console.log('静态函数...');
//     }
//     myAge = 123;
//     myFn() {
//         // 上下文this 与function是一致的 用的是自己的
//         // 只有箭头函数才向上用别人的 
//         console.log('实例的函数', this.myAge);
//     }
// }
// let o1 = new Obj1();
// console.log(o1);
// o1.myFn();
// console.log(Obj1.staticAge);
// console.log(Obj1.staticFn());


// 相当于是main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './props1.js'
import App2 from './App2.js';
import App3 from './App3.js';
ReactDOM.render( < App / > , document.querySelector("#root"));