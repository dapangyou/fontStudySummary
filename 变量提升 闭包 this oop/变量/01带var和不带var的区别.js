// 在全局作用下 声明一个变量 也相当于给window全局对象设置了一个属性
// 变量的值就是属性值
// 私有作用域下声明的变量和window没啥关系
// console.log(a);
// 判断一个对象中是否有某个属性 'name' in obj  如果有就返回true
// 如果没有就返回false

// console.log('a' in window);
// var a = 12;
// console.log(a);
// console.log(window.a);

// a = 13;
// console.log(window.a);

// window.a = 14;
// console.log(a);
// 全局变量和window对象中的属性存在“映射机制”

// 不加var的本质是window的属性
console.log(a);
console.log(window.a);
console.log('a' in window);
a = 12; // => window.a = 12;
console.log(a);
console.log(window.a);


window.document.getElementById('')
window.eval();