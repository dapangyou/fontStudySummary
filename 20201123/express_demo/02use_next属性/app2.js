// 使用next
const express = require('express');
let app = express();

app.listen(3003, ()=>{ 
    console.log('服务器启动成功....');
});

app.use('/app1', (req, res, next) => {
    console.log('server1');
    next();
});
 

app.use('/app2', (req, res, next) => {
    console.log('server2');
    next();
 });


 
app.use('/app3', (req, res, next) => {
    console.log('server3');
    next();
 });


 
app.use('/app4', (req, res, next) => {
    console.log('server4');
    next();
 });


