<!-- Cookie 和 session 是客户端和服务器的会话技术
    这个描述好像有点问题
-->

1.Cookie 的交互过程
客户端第一次向服务器发送请求，服务器接收请求并且返回一个 Cookie 给客户端
客户端将 Cookie 保存起来，（一般是在浏览器的缓存中）当再次向服务器发送请求的时候携带 Cookie 发送到服务器
以后每次请求都会携带 Cookie 给服务器发送请求

2.Cookie 在客户端和服务器端传递的原理
Cookie 是 http 协议中的一个内容
当服务器向客户端返回 Cookie 的时候是作为 http 的响应头的内容返回给客户端的 set-cookie: ###服务器设置的 Cookie 值
当客户端携带 Cookie 向服务器端发送请求的时候，Cookie 是在 http 的请求头中 cookie: '设置的 Cookie'
Cookie 的规范是 http 协议规定的

2.Cookie 的生命周期
Cookie 的生命周期分为三种
(1)内存 Cookie:关闭浏览器即失效
(2)硬盘 Cookie：已经持久化了 手动删除失效
(3)去除 Cookie：用函数删除 Cookie

3.Cookie 的实际应用场景
由于 http 协议是一次请求一次响应，是无状态协议，如果想要存储用户信息等就可以使用 Cookie 来实现
