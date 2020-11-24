// 使用中间件配置路由规则
const express = require('express');

let server = express();
// 1.获取中间件对象
let router = express.Router();

// 2.配置路由规则
router.get('/login', (request, response) => {
    // 对不同的路由做出不同的响应
    response.end('login page.....');
}).get('/register', (request, response) => {
    // 对不同的路由做出不同的响应
    response.end('register page.....');
});

// 将中间件挂载到服务器上
server.use(router);

// 监听端口
server.listen(3000);