/**
 * call和apply的区别是什么，哪一个性能更好一些。
 */
fn.call(obj, 10, 20, 30);
fn.apply(obj, [10, 20, 30]);

/**
 * call和apply都是用来改变this指向的。
 * 区别是调用的时候call传参是一个个的传递的
 * apply传参是以数组的形式传递的
 */