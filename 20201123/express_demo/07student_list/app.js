// 配置路由的使用

const express = require('express');

let app = express();

let router = express.Router();


let list = [
    { name: "aaa", img: "imgs/1.jpg" },
    { name: "bbb", img: "imgs/2.jpg" },
    { name: "ccc", img: "imgs/3.jpg" },
    {name: "ddd",img:"imgs/4.jpg"},
];

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

// app.use('',express.static());

app.use('/public',express.static('./public/'));

app.use(router);

app.listen(3000);
