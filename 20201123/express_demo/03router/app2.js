// 配置路由的使用

const express = require('express');

let app = express();

let router = express.Router();

router.get('/login', (req, res) => { 
    res.end('login......');
}).get('/register', (req, res) => { 
    res.end('register......');
})

app.use(router);

app.listen(3000);
