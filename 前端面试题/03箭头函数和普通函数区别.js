/**
 * 箭头函数和普通函数的区别
 */
/**
 * 1.箭头函数语法上更加简洁
 */
// function fn(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// let fn = x => y => x + y

/**
 * 2.箭头函数中没有自己的this  它里面出现的this是继承函数所属上下文中的this
 * (使用call或者apply等任何方式都无法改变this的指向)
 */

/**
 * 3.箭头函数中没有arguments  只能基于...arg获取传递的参数集合
 */
// let obj = {
//     name: 'obj'
// }

// function fn1() {
//     console.log(this);
// }
// fn1.call(obj);

// 箭头函数的this是所属上下文
// let fn2 = () => {
//     console.log(this);
// }

// fn2.call(obj);

/**
 * 4.普通函数可以被当作构造函数被行 箭头函数不能被当作构造函数被执行
 * 箭头函数没有prototype
 */
// function Fn() {
//     this.x = 100;
// }
// let f = new Fn;

let Fn = () => {
    this.x = 200;
}
let f = new Fn;