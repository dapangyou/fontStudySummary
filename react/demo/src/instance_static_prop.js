// function P1() {

// }

class Person {
    age = 100;
    constructor(props) {
        this.age = props.age;
        console.log('触发了person');
    }
}
class Boy extends Person {
    name = 'jack';
    constructor(props) {
        super(props);
        this.name = props.name;
        console.log('触发了boy');
    }
}
// let p = new Boy();
// console.log(p);

let p = new Boy({ name: 'nick', age: 18 });
console.log(p);