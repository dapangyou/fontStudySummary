// 接收一段字符串路径
const path = require('path');
let mypath = path.join(__dirname, 'jack', 'rose', 'test.txt');

// 解析这个路径为对象 更易于操作
let pathObj = path.parse(mypath);
console.log(pathObj);

// base可以作为修改文件名 或者是后缀的方式
pathObj.base = 'mack.good';

// 接收路径对象  转化成字符串
mypath = path.format(pathObj);
console.log(mypath);