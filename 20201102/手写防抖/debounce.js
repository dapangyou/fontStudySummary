function debounce(fn, wait,immediate) { 
    let timeout,result;
    let decounced =  function () { 
        // 改变内部的this指向
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        if (immediate) {
            // 立即执行
            let callNow = !timeout;
            timeout = setTimeout(() => { 
                timeout = null;
            }, wait);
            if(callNow) result = fn.apply(context,args);
        } else { 
            timeout = setTimeout(function () { 
                // 改变函数this的指向
                fn.apply(context,args);
            },wait);
        }
    }
    decounced.cancel = function () { 
        clearTimeout(timeout);
        // 防止内存泄漏
        timeout = null;
    }
    return decounced;
}

let container = document.querySelector("#container");
let btn = document.querySelector("#btn");
let count = 0;
function dosomething(e) {
    console.log(e);
    // console.log(this);
    container.innerHTML = count ++;
}
let doSome = debounce(dosomething,1000);
btn.onclick = function () { 
    doSome.cancel();
}

container.onmousemove = doSome;

// 防抖的应用场景：
// 1.scroll事件滚动触发
// 2.搜索框输入查询
// 3.表单验证
// 4.按钮提交事件
// 5.浏览器的窗口缩放 resize事件