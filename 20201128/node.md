```js
    nodemon: 由于node的一点的改动都要频繁的重启 所以使用nodemon可以自动重启
    安装nodemon: npm i nodemon -g
    运行: nodemon inedx


    单元测试Jest:
    1.安装jest库: npm install jest -g
    2.在__tests__文件夹下创建 index.spec.ts文件
    test('Hello World',()=>{
        require('../index);
    });
    3.断言的使用(和java中类似 但是java中的已经忘了 嘻嘻)
     expect(ret)
        .toBe('helloworld');
     以上就是断言的使用方式,期待输出为'helloworld' 如果结果不是期待的那样就会报错的
```

```js
    异步编程:
        
```
