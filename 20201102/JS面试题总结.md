题目一:

```js
let a = [],
  b = "0",
  c = 0;

a[b] = "yintao";
a[c] = "xiaowanzi";
console.log(a[b]); // xiaowanzi
```

<!-- 分析 -->

```js
    a["0"] = "yintao";
    a[0] = "xiaowanzi";
    编译器在执行的过程中会将0转化成"0" 因此 a["0"] 和 a[0] 是一样的
    后者会覆盖前者
    因此结果为xiaowanzi
```

题目二:

```js
let a = {},
  b = Symbol("1"),
  c = Symbol("1");
a[b] = "yintao";
a[c] = "xiaowanzi";
console.log(a[b]); //yintao
```

<!-- 分析 -->

```js
    由于Symbol是返回唯一的值 所以b和c的值不一样 所以不会覆盖
```

题目三

```js
let a = {},
  b = { n: "1" },
  c = { n: "2" };
a[b] = "yintao";
a[c] = "xiaowanzi";
console.log(a[b]); //xiaowanzi
```

<!-- 分析 -->

```js
    因为b和c都是对象 当一个对象去作为另外一个对象的属性的时候  属性对象就会调用对象的toString()方法  为"[Object,Object]"  因此b和c是一样的  因此会有覆盖的情况
```

题目四

```js
var test = (function (i) {
  return function () {
    alert((i *= 2)); //alert出来的值都是字符串  alert的结果都要是调用toString
  };
})(2);
test(5);
```

```js
// 分析 这个题目好难啊
        首先执行立即执行函数 传入的是2 计算出来的结果是4
        test接受的不是一个函数 而是一个函数的执行返回结果
        也就是说 test存储的是 return function() 的这个函数的栈内存地址
        即
        test = function() {
            alert(i*=2)
        }
        当执行test(5)的时候 没有形参接收5  因此直接执行i*=2
        但是i不存在 根据作用域链的规则就会往上级作用域查找
        执行test所在的执行上下文是立即执行函数  因此在立即执行函数中查找 i=2
        因此 输出的结果为4
        又因为alert输出的都要进行toString转化成为字符串 因此输出的结果为"4"
```

题目五

```js
var a = 0,
  b = 0;
function A(a) {
  A = function (b) {
    alert(a + b++);
  };
  alert(a++);
}
A(1);
A(2);
```
