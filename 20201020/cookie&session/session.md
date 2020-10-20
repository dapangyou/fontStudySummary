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
