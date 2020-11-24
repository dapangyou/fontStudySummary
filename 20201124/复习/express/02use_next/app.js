// url不同对应不同的响应
const express = require('express');

// 构建服务器
let server = express();

server.listen(3000);

server.use('/server1', (request, response, next) => {
    response.end('server1');
    next();
});


server.use('/server2', (request, response, next) => {
    response.end('server2');
    next();
});

server.use('/server3', (request, response, next) => {
    response.end('server3');
    next();
});

server.use('/server4', (request, response, next) => {
    response.end('server4');
    next();
});