/**
 * 定时器：设定一个定时器 并且设定等待时间
 * 当达到执行时间 浏览器会把对应的方法执行
 *  js中常用的定时器
 *  setTimeout([function],[interval]);
 *  setInterval([function],[interval]);
 *  function 到达时间都浏览器帮我们执行的方法  ---> 和事件绑定机制很相似
 */
// 只执行一次
// let count = 0;
// setTimeout(() => {
//     count++;
//     console.log(count);
// }, 1000);

// 轮询定时器  ==> 每间隔interval这么长的时间 都会把设定的方法重新执行一次
// 直到定时器被清除
// let count = 0;
// setInterval(() => {
//     count++;
//     console.log(count);
// }, 1000);


// 清除定时器
clearTimeout
clearInterval
// 这两个方法中的任何一个都可以清除用任何方法创建的定时器

/**
 * 1.设置定时器都会有一个返回值，这个值是一个数字，属于定时器的编号，代表
 * 当前是第几个定时器（不管是基于setTimeout还是基于setInterval创建的定时器
 * 这个编号会累加）
 * 2.清除定时器
 * clearTimout([序号])
 * clearInterval([序号])
 */

let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(count);
    if (count === 5) {
        // 清除定时器
        clearInterval(1);
    }
}, 1000);

// let count = 0;
let timer2 = setTimeout(() => {
    count++;
    console.log(count);
}, 1000);