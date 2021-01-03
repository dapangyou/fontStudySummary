Ajax Axios Fetch的核心区别
```js
    let xhr = new XMLHttpRequest();
    xhr.open('get','url');
    xhr.onreadystatechane = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let res = responseText;
        }
    }
    xhr.send();

    $.ajax({
        url: "",
        method: 'get',
        data: ``,
        success(res) {
            console.log(res);
        }
    })

    ajax回调地狱问题
```