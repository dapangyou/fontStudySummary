```js
    var a = 2;  
    这行代码声明赋值经历了哪些过程？
    1.首先先声明一个变量a 没有赋值 默认值是undefined
    2.在当前作用域开辟一个位置存储12这个值
    3.让该变量和12关联在一起(定义)

    栈内存(作用域):
    1.提供一个供JS执行的环境(代码都是在栈中执行的)
    2.由于基本数据类型值比较简单,他们都是直接在栈内存中开辟了一个位置,把值直接存储进去
    当栈内存被销毁 存储的那些基本值也就跟着销毁了

    堆内存: 引用值对应的空间
    1.存储引用类型的值(对象、函数)
    当堆内存释放销毁,那么这个引用之就彻底没了
    堆内存释放: 当堆内存没有被任何变量或者其他东西所占用
    浏览器会在空闲的时候,自主的进行内存回收 把所有不被占用的堆内存销毁
```

```js


```