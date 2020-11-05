define([], function() {
    var salemanList = [
        { name: "zhangsan", age: 20 },
        { name: "lisi", age: 30 }
    ];
    return {
        getList() {
            return salemanList;
        },
        add(name, age) {
            salemanList.push({ name, age });
        },
        update() {},
        delete() {}
    }
});