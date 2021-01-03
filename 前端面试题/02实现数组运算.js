/**
 * 实现(5).add(3).minus(2);  使其输出结果为6
 */

~ function() {

    function check(n) {
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

    Number.prototype.add = add;
    Number.prototype.minus = minus;

    console.log((5).add("3").minus(2));

}();