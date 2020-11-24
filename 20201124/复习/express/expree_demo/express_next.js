const express = require('express');

let server = express();

server.get('/server1', (request, response, next) => {
    response.end('server111111');
    next();
})

server.get('/server2', (request, response, next) => {
    response.end('server2222');
    next();
})


server.get('/server3', (request, response, next) => {
    response.end('server33333');
    next();
})

server.listen(3000);