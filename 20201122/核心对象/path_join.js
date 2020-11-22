// 1.引入核心对象
// const { resolve } = require('path');
const path = require('path');   // path就是核心对象、
                                // path在node.exe里面

// join 拼接路径
const mypath = path.join(__dirname, "//one//", '//two//', '//three');
// console.log(mypath);

// 相对路径转绝对路径......
const str = './abc/efg.js';
let temp = path.resolve(str);
console.log(temp);