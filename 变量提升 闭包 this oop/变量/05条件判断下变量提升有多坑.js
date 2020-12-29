function fn();
console.log(fn);
if (1 === 1) {
    console.log(fn);

    function fn() {
        console.log('ok');
    }
}
console.log(fn);