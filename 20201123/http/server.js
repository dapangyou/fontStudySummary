// 1.引入核心对象
const http = require('http');
// 2.创建服务器对象
let server = http.createServer();
// 3.基于事件
server.on('request', (request, response) => {
    // 请求之后的返回结果
    response.end('xxxx.....');
});

server.listen(3000, () => {
    console.log('服务器已启动.....');
});