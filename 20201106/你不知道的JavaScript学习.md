javascript 变量提升

```js

    foo();
    var foo;
    function foo() {
        console.log(1);
    }

    foo = function() {
        console.log(2);
    }

    ----------------------------
        分析: 以上代码的执行结果为1
        以上代码会被编译器编译之后的代码为
        function foo() {
            console.log(1);
        }
        foo();
        foo = function() {
            console.log(2);
        }
        以上代码就很好解释结果为什么是1了
        var foo 由于是重复声明 所以会被忽略
        又因为变量声明提前 函数的声明会优先于变量的声明
        因此var foo 就被放在后面 所以被忽略了
```

关于变量提升 如果是块级作用域变量提升只会提升

javascript 闭包

```js
      function foo() {
            var a=2;

            function bar() {
                console.log(a);
            }

            return bar;
        }

        var baz = foo();
        baz();

        分析: 将bar()函数当做是值类型进行传递
        调用foo实际上是调用bar
        而且foo不会被GC销毁 有了闭包的存在 就不会被销毁
```

```js
使用立即执行函数来使用闭包;
闭包的案例一: <ul class="nav">
  <li>1111</li>
  <li>2222</li>
  <li>3333</li>
  <li>44444</li>
</ul>;
点击li获取索引号;
var lis = document.querySelector(".nav").querySelectprAll();
lis.onclick = function () {
  // 使用立即执行函数
  // 每一次循环都创建一个立即执行函数
  (function (i) {
    lis[i].onclick = function () {
      console.log(i); //点击事件的函数使用到了外层的立即执行函数中的参数i ---> 闭包的使用
    };
  })(i);
};
```

```js
闭包使用案例二: 定时器中闭包的使用;
lis.onclick = function () {
  (function () {
    setTimeout(function () {
      console.log(lis[i].innerHTML);
    }, 3000);
  })(i);
};
```

在定时器、事件监听器、Ajax 请求、跨窗口通信、Web Workers 或者其他异步(同步)任务中
只要使用了回调函数 就是在使用闭包

```js
    闭包模块化
    1.必须有外部的封闭函数,该函数必须至少被调用一次(每次调用都会创建一个新的模块实例)
    2.封闭函数必须返回至少一个内部函数 这样内部函数才能在私有作用域中形成闭包 并且可以访问
    并修改私有的状态
```

```js
  块级作用域的替代方案:
    在es6之前块级作用域该如何表达
    在es5如何实现块级作用域
    当es6转es5的过程中 编译器就是这么转成块级作用域的
        try {
            throw 2
        } catch (a) {
            console.log(a);
        }
    使用try...catch实现块级作用域
```
