function fn() {
    // var a = 12;
    // 在作用域查找的过程中，如果找到window也没有这个变量 相当于给window设置了一个属性b
    //  window.b = 13
    b = 13;
    console.log(b);
}
fn();
console.log(b); // window.b = 13