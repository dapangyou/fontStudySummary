`AMD模块化`
`1.AMD模块化的基本使用`
AMD默认只支持读取js
```js
    1.首先新建js文件封装模块  在js中defined  return 函数、对象都可
    2.在index.html中引入require.js 然后
    // require的参数和function中的参数要顺序一致
     require(["user"], function(user) {
        //  编写逻辑
        // 直接使用
        user();
     });
```
2.AMD入口文件
可以使用一个js文件来引入操作其他的模块
```js
    1.在入口文件中引入需要的模块
     require([], function() {});
    2.在index.html中可以使用简便写法来引入入口文件
    main是入口文件
     <script data-main="main"></script>
    3.入口文件中可定义配置项
    require.config = {
        paths: {
            jQuery: "jQuery-3.1.2",
            //配置path 可将一些容易发生改变迭代的文件重新配置
        },
        baseUrl: "/js/base"   //配置的基本路径是相对于入口文件为基础路径
    }
```