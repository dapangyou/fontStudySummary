// 配置路由的使用

const express = require('express');

let app = express();

let router = express.Router();

app.engine('.html', require('express-art-template'));

app.set('view engine','.html');

router.get('/hero-list', (req, res) => { 
    res.render('list.html', {
        heros: [{name:'aaaa'},{name:'bbbb'},{name:'ccc'}]
    });
})

app.use(router);

app.listen(3000);
