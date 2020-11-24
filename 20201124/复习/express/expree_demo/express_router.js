const express = require('express');

let server = express();

let router = express.Router();
router.get('/server1', (req, res) => {
    res.end('server1...');
}).get('/server2', (req, res) => {
    res.end('server2...');
}).get('/server3', (req, res) => {
    res.end('server3...');
});


server.use(router);

server.listen(3001);