// 同步和异步的区别......
const mypath = 'F:/BaiduNetdiskDownload/极客时间前端进阶训练营第1期/01 前端进阶之路/01【瑞客论坛 www.ruike1.com】.mp4';
const fs = require('fs');

// console.log('同步读取前....');
// fs.readFileSync(mypath);
// console.log('工作A.....');
// console.log('同步读取完成后.....');

// 异步读取
console.log('异步读取前........');
fs.readFile(mypath, (error,data) => { 
    console.log('异步读取后.....');
});
console.log('工作B.......');


// 异步代码不阻塞后续代码的执行.....

