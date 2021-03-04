~ function () {

    // => 每一个方法执行完都要返回Number这个类的实例 这样才可以继续调取Number中的方法

    function check(n) {
        // 将传进来的值转化成数字
        n = Number(n);
        return isNaN(n) ? 0 : n;
    }

    function add(n) {
        n = check(n);
        return this + n;
    }

    function minus(n) {
        n = check(n);
        return this - n;
    }

    // ["add","minus"].forEach(item => {
    //     Number.prototype[item] = eval(item);
    // })
    Number.prototype.add = add;
    Number.prototype.minus = minus;
}();

(5).add(3).minus(2);