// 复习express的四个步骤
// 1.引入express
const express = require('express');
// 2.服务器
let server = express();
// 3.监听端口
server.listen(3001);
// 4.处理请求
server.use((request, response) => {
    response.end("Hello Luckly......");
 });