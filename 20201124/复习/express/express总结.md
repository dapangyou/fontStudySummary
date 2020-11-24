```js
    一
        express构建服务器四个步骤
        1.引入express
        2.构建express服务器
            let server = express();    //这样一个服务器就构建好了 简单快捷方便
        3.监听端口
            server.listen(3000);
        4.监听事件
            server.use((req,res)=>{
                // 针对请求做出相应的实际操作逻辑.....
            });

    
    二
        链式操作  针对不同的url做出相对应的处理  处理是链式处理的
        若是要根据不同的url来做出不同的响应 那么就需要使用多个监听了 
        根据测试 server.use只能监听到第一个事件 后面的事件就不起作用了
        因此需要使用到next 使得继续链式响应

        server.use('/server1',(request,response)=>{
            response.end('server1');
            next();        //有了这个next才会继续向下执行
        });

         server.use('/server2',(request,response)=>{
            response.end('server2');
            next();        //有了这个next才会继续向下执行
        });

    三
        路由
        // 通过express获取到中间件
        let router = express.Router();
        // 操作中间件  将中间件挂在到服务器上
        server.use(router);
```