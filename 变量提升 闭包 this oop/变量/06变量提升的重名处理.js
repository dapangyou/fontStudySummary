/**
 * 1.带var和function关键字声明相同的名字 这也算是重名了
 */

/**
 * 2.关于重名的处理：
 *     如果名字重复了 不会重新声明 但是会重新定义
 *     (重新赋值) 不管是变量提升还是代码执行阶段皆是如此
 */
fn();

function fn() {
    console.log(1);
}
fn();

function fn() {
    console.log(2);
}
fn();
var fn = 100;
fn();

function fn() {
    console.log(3);
}
fn();

function fn() {
    console.log(4);
}
fn();