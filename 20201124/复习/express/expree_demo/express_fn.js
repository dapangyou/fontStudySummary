const express = require('express');

const server = express();

let router = express.Router();

router.get('/json', (req, res) => {
        res.json([{ "name": "test1", age: 20 }]);
    })
    .get('/redirect', (req, res) => {
        res.redirect('http://www.baidu.com');
    })
    .get('/jsonp', (req, res) => {
        res.jsonp('jsonp');
    })
    .get('/download', (req, res) => {
        res.download('./express_next.js');
    })

;

server.use(router);
server.listen(3000);