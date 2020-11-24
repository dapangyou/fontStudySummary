// express四个步骤
const express = require('express');

// 构建服务器
let server = express();

// 监听端口
server.listen(3000);

// 处理响应

server.use((req, res) => {
    res.end('Hello World......');
});