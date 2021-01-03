/**
 * call和apply的区别是什么，哪一个性能更好一些。
 */
fn.call(obj, 10, 20, 30);
fn.apply(obj, [10, 20, 30]);

/**
 * call和apply都是function原型上的方法 每一个对象的实例都可以调用
 * call和apply都是用来改变this指向的。
 * bind并没有立即执行  只是预先处理this指向
 * 区别是调用的时候call传参是一个个的传递的
 * apply传参是以数组的形式传递的
 * 当参数大于3个的时候 call性能好 小于3个的时候 call和apply差不多
 */