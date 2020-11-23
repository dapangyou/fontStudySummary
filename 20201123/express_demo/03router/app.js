const express = require('express');

let app = express();

// 1.获取中间件的对象
let router = express.Router();

// 2.配置路由规则
router.get('/login', (req, res) => { 
    res.end('login page....');
})
    .get('/register', (req, res) => { 
        res.end('register page....');
    })

app.use(router);


app.listen(3000);