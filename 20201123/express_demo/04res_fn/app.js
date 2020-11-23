// 配置路由的使用

const express = require('express');

let app = express();

let router = express.Router();

router.get('/json', (req, res) => { 
    res.json([{"name": 'jack',"age":10}]);
}).get('/redirect', (req, res) => { 
    res.redirect('http://www.baidu.com');
}).get('/jsonp', (req, res) => { 
    res.jsonp('jsonp');
}).get('/download', (req, res) => { 
    res.download('./app.js');
})

app.use(router);

app.listen(3000);
