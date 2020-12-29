// var fn;    ---------> 只对等号左边进行变量提升
// 匿名函数之表达式

// fn();    TypeError: fn is not a function
sum();

// 函数表达式
var fn = function() {
    console.log(1);
};

// 普通函数: 在变量提升阶段就已经声明和定义了
function sum() {
    console.log(2);
}