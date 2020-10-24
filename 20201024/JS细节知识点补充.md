## 重要：做题避坑

    1.JS引擎运行JS分为两个步骤  预解析 代码执行
    预解析：JS引擎会把所有的var和function提升到当前作用域的最前面
    代码执行: 按照代码的书写顺序从上到下的执行
    2.预解析分为 变量预解析(变量提升) 和函数预解析(函数提升)
        变量提升: 就是把所有的变量声明提升到当前作用域的最前面 不提升赋值操作
        函数提升：就是把所有的函数声明提升到当前作用域的最前面 不提升赋值操作
     题目

```js
f1();
console.log(a);
console.log(b);
console.log(c);
function f1() {
  var a = (b = c = 9);
  console.log(a);
  console.log(b);
  console.log(c);
}
// 执行以上代码的输出结果是什么？
// 以上代码相当于是以下代码
function f1() {
  var a = (b = c = 9);
  //   相当于是 var a=9;b=9;c=9;  这种不带var的就像当是全局变量
  // 集体声明的形式是 var a=9,b=9,c=9  集体声明是逗号  默认自带var的
  console.log(a); //9
  console.log(b); //9
  console.log(c); //9
}
f1();
console.log(b); //9
console.log(c); //9
console.log(a); // 报错
```

    创建对象的三种方式
        1.字面量的方式创建

```js
var obj = {
  name: "zhangsan",
  age: 20,
};
```

        2.new Object的方式创建

```js
var obj = new Object();
obj.name = "lisi";
obj.age = 30;
```

        3.利用构造函数的方式创建
        构造函数的方式相比较上面的两种方式较为简单 上面的两种方式每次都只能创建一个对象
        构造函数的方式可创建多个对象

```js
    ...前面已经写过很多了  此处省略
```

    new 关键字的执行过程
        1.在内存中创建一个空的对象
        2.this指向创建的空对象
        3.指向构造函数中的代码
        4.返回这个对象

    遍历对象使用for... in

    数组转换成字符串

```js
var arr = [1, 2, 3, 4, 5, 6];
// 数组转字符串的方式一
console.log(arr.toString());
// 数组转字符串方式二
console.log(arr.join(""));
```

    基本数据类型指的是：将简单的数据类型包装成为复杂的数据类型
    例如：
        var str = 'test';
        console.log(test.length);   //为什么基本数据类型会有length属性呢
    其实就是js将基础数据类型包装成为了复杂数据类型,这样基本数据类型就有了属性和方法了
    js中String Number Boolean三种数据类型可这样操作

```js
// 将简单数据类型包装成为复杂数据类型的过程
    1.将简单数据类型包装成为复杂数据类型
    var temp = new String('test');
    2.将临时变量temp赋值给str
    str = temp
    3.销毁这个临时变量
    temp = null;
```

    字符串不可变,字符串的改变是要重新开辟内存空间，存放的是新的值 原理的值不会改变

    简单数据类型传参是值传递
    当把一个值变量作为参数传递给函数的形参的时候，其实就是把变量在栈空间的值赋值了一份
    给形参，那么在方法内部对形参的任何修改都不会影响到外部的变量

    复杂类型传参是把引用类型的变量传给形参，其实就是把变量的栈空间保存的堆地址复制
    给了形参，形参和实参保存的是同一个地址，其实 就是同一个对象

    ----------DOM细节知识点(记不清的知识点)
    getElementsByTagName返回的值的伪数组
    querySelector是H5新增的获取元素的方式  只返回选择器的第一个元素
    querySelectorAll  返回的是一个集合
    获取body元素 document.body
    获取html元素 document.documentElement

    事件分为三要素：事件源  事件类型  事件处理程序
