let arr = [10, 20, 30],
    obj = {};
function fn(x, y, z) { }

fn.apply(obj, arr);   // => x=10 y=20 z=30

fn.call(obj, arr);   // => x=[10,20,30] y=z=undefined

fn.call(obj, ...arr);  //基于ES6的展开运算符也可以实现把数组中的每一项依次传递给函数