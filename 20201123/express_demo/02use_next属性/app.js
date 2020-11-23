const express = require('express');
let app = express();
app.listen(3002, () => { 
    console.log('服务器端口启动成功......');
});

// 1.app.use是请求与响应中执行的一件事 按代码顺序执行
//  2.next的函数调用是放行到下一个函数开关.....
// 3.如果是全next 没有最终的end页面数据  框架帮我们处理了
//  status 404

// 用户选择性url开头的部分 选择性调用
app.use('/server1',(req,res,next) => { 
    console.log('服务器处理1.....');
    next();   //放行开关
});
app.use('/server2',(req,res,next) => { 
    console.log('服务器处理2.....');
    next(); 
});
app.use('/server3',(req,res,next) => { 
    console.log('服务器处理3.....');
    next(); 
});
app.use('/server4',(req,res,next) => { 
    console.log('服务器处理4.....');
    next(); 
});