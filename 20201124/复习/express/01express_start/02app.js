// 使用express构建服务器

const express = require('express');

let server = express();

server.listen(3002);

server.use((request, response) => {
    response.end('express.....');
});