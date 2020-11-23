const http = require('http');
const fs = require('fs');

// let server = http.createServer();

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (error, data) => {
            res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
            res.end(data);
        });
    } else if (req.url === '/test' && req.method === 'GET') {
        // res.end('OK');
        res.writeHead(200, { 'content-type': 'application/octet-stream' });
        console.log('访问成功....');
        setInterval(function() {
            res.write('' + Date.now() + '^_^');
        }, 1000);
    }
}).listen(3001);