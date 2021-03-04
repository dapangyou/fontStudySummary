XML早期用于存储和传输数据
```xml
    <student>
        <name>Tom</name>
        <age>20</age>
    </student>
```

```js
    jsx语法规则：
        1.定义虚拟DOM的时候,不要写引号
        2.标签中混入js表达式时要用{}
        3.样式的类名指定不要用class 要用className
        4.style应该用{{key:value}}表达式  {} --> jsx语法  {} --> key:value对象
        5.jsx语法只能有一个根标签
        6.标签必须要闭合
        7.标签首字母
            (1) 若小写字母开头 则将改标签转化为html中的同名元素 若html中无该标签对应的同名元素 则报错
            (2) 若大写字母开头 react就去渲染对应的组件 若组件没有定义 则报错
```