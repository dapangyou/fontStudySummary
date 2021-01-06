// 整个项目的入口文件
var app = {
    template: '<div>我是一个入口组件</div>'
}
export default app;

// 声明并导出
export var num1 = 2; //作为一整个对象的key导出
// 声明
var num2 = 3;
// 导出
export { num2 };
console.log(2222);

export function add(x, y) {
    return console.log(x + y);
}