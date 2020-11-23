// 配置路由的使用

const express = require('express');

let app = express();

let router = express.Router();

app.engine('.html', require('express-art-template'));

app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.set('view engine','.html');

router.get('/', (req, res) => { 
    // res.render('list.html', {
    //     heros: [{name:'aaaa'},{name:'bbbb'},{name:'ccc'}]
    // });
    res.render('index');
})

app.use(express.static('./js/'));

app.use(router);

app.listen(3000);
