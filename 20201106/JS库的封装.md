```js
    模拟jQuery封装js实现 
        给页面所有的div设置字体颜色为红色 $("div").css("color","red");
    (function(global){
        function jQuery(selector) {
            
        }
        window.$ = window.jQuery = jQuery;
    })(window)
```