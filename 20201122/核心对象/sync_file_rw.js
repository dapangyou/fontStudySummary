// 引入核心对象
const fs = require('fs');

// 先读后写
let data = fs.readFileSync('file/read.txt', 'utf-8');
console.log(data);

// 写入
fs.writeFileSync('file/write.txt', data);
console.log('文件写入成功.....');