1.session 是服务端的会话技术。
session 的作用是什么？
session 是为了实现服务端的数据共享的。一个 session 会话中有多个 http 请求。
http 请求是无状态的，是相互独立的，不能进行数据共享，因此可以在一个会话中进行数据共享。
就可以使用到 session

2.session 的创建过程
当有一个请求发送到服务端的时候，服务端就会根据客户端携带的 cookie 中的 sessionId 去 session 池中
寻找有没有该 sessionId 的 session。如果客户端没有携带 cookie，也就没有 sessionId,就会去 session 池
中创建一个 session,然后将该 session 对应的 sessionId 返回给客户端，也就是服务端返回给客户端的 cookie
如果携带了 cookie，服务端就可以在 Cookie 中拿到 sessionId，然后根据 sessionId 在 session 池中获取 session。然后就可以
从 session 中获取到数据了

3.什么时候是一次 web 会话开始
当服务器将 cookie 返回给客户端的时候就是会话开始的时候

4.什么时候一次会话结束
当 session 消失或者是 cookie 消失的时候：
session 超时 / 用户清除 cookie
默认的情况下 session 是有生命周期的,不同的后台语言的时间不同.
以 java 为例，java 中的 session 的生命周期是 30 分钟,那么不能误理解为每次会话的时间就是 30 分钟了。
session 是有心跳机制的，只要用户在默认过期时间之内，重新激活 session，session 就会被激活。

5.每个用户访问都会服务端都会创建一个 session，那么 session 池会不会创建太多的 session 而影响性能
在 session 的生命周期之内的 session 会在 session 池中，如果超过了 session 的过期时间是会被移除 session 池
如果考虑高并发的情况,session 都不可移除，那么可以将 session 持久化到硬盘上
