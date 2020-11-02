```js
    promise是为了解决回调地狱的问题
    像ajax中的回调地狱 回调嵌套很多个回调的方式 很麻烦

    promise的基本用法

    // 首先封装一个promise函数
    function fn() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('你好');
                resolve();
            },1000);
        });
    }

    //调用
    fn().then(res => {
        console.log("第一步操作");
        fn().then(res => {
            console.log("第2步操作");
            fn().then(res => {
                console.log("第3步操作");
            })
        })
    })

    // 如果有多个promise要执行  就会链式调用

    function f1() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('第1步操作.......');
                reslove();
            },1000)
        });
    }

    function f2() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('第2步操作.......');
                reslove();
            },1000)
        });
    }

        //链式调用promise
        f1().then(res=>{
            return f2();
        }).then(res=>{
            console.log("完成");
        })


```


        
```js
                 promise的错误处理的两种方式
                //  1.reject方式
         function f3() {
            return new Promise((resolve,reject)=>{
                $.ajax({
                    url: "/getBooks",
                    success(res) {
                        // 成功的回调函数
                        resolve(res);
                    },
                    error(error) {
                        reject(error);
                    }
                })
           });
         }

        // 第一种方式通过resolve reject来处理异常
        f3().then(res=>{
            console.log('请求成功.....');
        },error=>{
            console.log("请求失败.....");
        });


        // 第二种方式

        f3().then(res=>{
            console.log("成功的请求.....");
        }).catch(error=>{
            console.log("捕获的异常.....");
        })

        // 第二种方式优于第一种方式  第二种方式可以捕获成功的回调的异常
        
```

```js
    async处理返回值

    function fn() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('hello');
            },1000)
        });
    }

    (async function() {
        const res1 = await fn();
        console.log('第一次',res1);

        const res2 = await fn();
        console.log('第一次',res2);

        const res3 = await fn();
        console.log('第一次',res3);
    })


```