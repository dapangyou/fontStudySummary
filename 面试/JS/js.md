```js
    1.call 和 apply的区别是什么，哪个性能更好一些？
        call和apply都是用来改变this指向的
        call的参数是一个个的传递的  
        apply是以数组的形式传递参数的

    fn.call(obj,10,20,30);
     call的参数是不固定的 obj是要改变的this的指向 后面的参数是要传递的参数
    fn.apply(obj,[10,20,30]);
     apply的参数是固定的,obj是要改变的this的指向,后面的参数是一个数组

     

     解释: call和apply都是Function原型上的方法 而每一个函数作为Function原型上的实例。
           调取call和apply方法
           call和apply都是用来改变函数的this指向的 区别是call的参数是一个个传递的
           apply的参数是组合成一个数组之后再进行传递的
           和call、apply相似的函数是bind 只不过bind并没有立即执行 只是预先改变obj的this的指向

           哪个性能更好一些呢?
            如果传递的参数在3个或者3个以内 call和apply的性能差不多
            参数超过3个以上 call的性能更好一些
            综合来说 call的性能要比apply的性能好那么一些
            尤其是在传递给函数参数超过3个的时候 所以后期开发的时候可以使用call多一些
```

```js
    2.箭头函数与普通函数(function)的区别是什么? 构造函数(function) 可以使用 new 生成实例
    那么箭头函数可以吗? 为什么?
      箭头函数和普通函数的区别?
        1.箭头函数语法上比普通函数更简洁
        2.箭头函数中没有自己的this 它里面的this是继承函数所属上下文中的this
          (使用call和apply等任何方式都无法改变this的指向)
        3.箭头函数中没有arguments(伪数组) 只能基于...arg获取传递的参数集合(数组)
        4.箭头函数不能被new执行  (箭头函数没有prototype 也没有this)
          没有prototype也就没有prototype所在堆中的contructor函数
```


