// 路由

const express = require('express');

// 构建服务器
let server = express();

// 中间件
let router = express.Router();

router.get('/login', (request, response) => {
    response.end('login page....hujia');
}).get('/register', (request, response) => {
    response.end('register page....hujia');
});

// 将路由挂在到服务器上

server.use(router);

server.listen(3001);