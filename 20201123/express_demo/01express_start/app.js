// 1.引入express
const express = require('express');
// 自动逐级向上查找  查找express文件夹下的package.json 的main属性 或者是 express文件夹下的index.js
// 2.构建服务器对象
let server = express();
// 3.开启服务器监听端口
server.listen(8888);
// 4. 处理响应
server.use((request, response) => {    //请求与响应的过程中
    response.end("Hello World");
});