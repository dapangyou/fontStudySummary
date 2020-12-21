/**
 *  三个状态： pedding状态(准备：初始化成功, 开始执行异步的任务)
 *            fulfilled(成功)
 *            rejected(失败)
 */
// Promise本身是同步的 可以管理异步操作
new Promise((resolve,reject) => { 
    // 执行一个的异步任务
    // (new Promise的时候 创建Promise的一个实例 立即会把当前函数体中的异步操作执行)
    // resolve: 异步执行成功 执行resolve方法
    // reject: 异步执行失败 执行reject方法
    setTimeout(() => {  
        resolve(100);
    },1000);
}).then(() => { 
    // 第一个传递的函数是resolve
    console.log('ok');
}, () => { 
    // 第二个传递的函数是reject
    console.log('no');
});

new Promise();