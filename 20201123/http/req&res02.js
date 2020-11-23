// 请求响应02理解
const http = require('http');
// 创建服务器
let server = http.createServer();
// 处理请求

server.on('request', (req, res) => {
    req.on('data', data => {
        console.log(data.toString());
    });
    // 处理请求并响应
    // 响应头
    res.setHeader('a', 'a');
    // 响应行 设置编码格式
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    // 响应体
    res.write('嘻嘻嘻嘻');
    res.end();
});

// 监听端口
server.listen(3000, () => {
    console.log('服务器启动成功的回调函数......');
})