// 1.引入核心对象
const http = require('http');
// 2.创建服务器对象
let server = http.createServer();
// 3.服务器处理请求
server.on('request', (request, response) => {
    // req 只读对象 拿属性
    // res 只读对象 调函数
    // 请求之后的返回结果console.log(console.log();re);
    // console.log(request.headers); //请求头
    // console.log(request.url); //行
    // console.log(request.methods);

    request.on('data', data => {
        console.log(data.toString());
    });
    //响应头
    response.setHeader('a', 'a');
    // 响应行
    response.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    // 响应体
    response.write('床前明月光');
    response.write('疑是地上霜');

    response.end('xxxx.....'); //写入到响应体...
});

server.listen(3000, () => {
    console.log('服务器已启动.....');
});