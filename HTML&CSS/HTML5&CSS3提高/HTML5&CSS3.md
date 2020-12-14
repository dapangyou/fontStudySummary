H5 新增语义标签

```js
    <header>  头部标签
    <nav>     导航标签
    <article> 内容标签
    <section> 文档区域标签
    <aside>   侧边栏标签
    <footer>  尾部标签
```

H5 新增 input 类型

```js
    type="email"  Email类型
    type="url"    URL类型
    type="date"   日期类型
    type="time"   时间类型
    type="month"  月类型
    type="week"   周类型
    type="number" 数字类型
    type="tel"    手机号码
    type="search" 搜索框
    type="color"  颜色
```

CSS 属性选择器

```js
    // 选择有value属性的input
    input[value] {}
    // 选择type="password"的input
    input[type="password"] {}

    // 以某个相同的开头来选择
    // 选择具有class属性 并且属性值必须是icon开头的这些元素
    div[class^=icon] {}

    // 选择以class的值是以data结尾的元素
    div[class$=data] {}
```

结构伪类选择器

```js
    选择ul的孩子第一个li
        ul li:fisrt-child {}
    选择ul的第二个孩子li
        ul li:nth-child(2) {}
    选择ul的最后一个孩子li
        ul li:last-child {}

    选择ul的孩子li的基数项
        ul li:nth-child(odd) {}
    选择ul的孩子li的偶数项
        ul li:nth-child(even) {}
```

nth-of-type

```js
nth-child 和nth-of-type的区别
```
