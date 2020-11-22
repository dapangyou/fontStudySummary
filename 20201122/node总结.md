```js
    node分为
        全局对象:何时何处都能访问
        核心对象：
    CommonJS: 规范JavaScript语言作为后端语言运行的标准
              具备什么能力 该怎么做 比如具备服务器的功能、可以操作文件
    模块:
        1.可以依赖一个模块require()
        2.需要被模块依赖 module.exports = 给外部的数据
        3.一个文件就是一个模块
```

````js
     关于核心对象path
        path是node中的核心对象
    path的使用
        1.path可以拼接路径
            path.join(_dirname,'//拼接路径参数一//','//拼接路径参数二//');
        2.path将相对路径转为绝对路径
            const str = "./abc/efg/hij.txt";
            path.reslove(str);  //将相对路径转为绝对路径的方式
        3.将路径转为对象
            path.parse(myPath);
        4.将路径转为字符串
            parse.format(mypath);

```]

```js
    不使用模块的弊端
        1.在js中涉及到的逻辑,为逻辑对象考虑引用顺序
        2.所有的对象都是全局对象 会有命名冲突的问题
    模块化的使用
        1.遵从commonJS规范
        2.一个文件就是有个模块
            导入 require()
            导出 module.exports = xxx
            每一个模块内声明的变量属性模块内的作用域
````

```js
    同步阻塞和异步非阻塞的原理:
        同步阻塞: 主线程执行任务,另外一个线程执行文件读写操作, 在文件读写操作的过程中 主线程一直在等待执行的结果  当另外一个线程执行完成之后 主线程获取到执行的结果 其中 在执行文件读写的过程中主线程会反复的询问是否读写操作已完成  直到已完成该操作  这个过程就是轮询 当主线程获取到操作的结果之后就可以继续执行下面的操作了
        异步非阻塞: 主线程执行任务 另外一个线程执行文件读写 主线程不会卡主等待 而是去执行下面的操作 直到文件读写完成 主线程会被另外一个线程通知结果  然后拿到结果 继续执行接下来的操作
```

```js
// 异步文件读取
// 1.引入核心模块fs
const fs = require("fs");
const mypath = "/abc/ccd/ss.txt";
fs.readFile(mypath, (error, data) => {
  if (error) {
    throw error;
  }
  // 打印读取的文件内容
  console.log(data.toString(utf8));
});
```

```js
// 异步写文件
fs.writeFile(mypath, "测试写入文件的内容", (error) => {
  if (error) {
    throw error;
  }
});
```
