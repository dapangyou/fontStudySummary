jsonp
jsonp实现原理
```js
script
img
link
iframe
...以上这些标签不存在跨域请求的限制

JSONP实现原理:
 利用srcipt标签不存在跨域的这一特点,jsonp就是加上script标签
 然后加上src属性 将url放到src属性中
 <scriprt src="http://127.0.0.1:4000/list?callback=func"></scriprt>
 function func() {
    //  do something what yo u want to do
 }
 基于script没有跨域的限制向服务器发请求 同时将本地的函数传递给服务器
 服务器接收到客户端的请求 callback=func 
 1.准备数据 data = {}
 2.给客户端返回数据
 'func('+JSON.stringify(data)+')'  //字符串  将这样的数据返回给客户端
 3.浏览器把返回的字符串解析为js执行 以及获取到data数据
 func函数必须是全局函数
 JSONP需要服务器端的支持
```
================================================================
2.cors跨域资源共享
```js
-客户端（发送ajax/fetch请求）
-服务器端设置相关的头信息
```
=================================================================
http proxy => webpack-dev-server

