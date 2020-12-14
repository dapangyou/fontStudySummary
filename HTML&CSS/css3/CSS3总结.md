伪元素

```js
    伪元素选择器可以帮助我们利用CSS创建新标签元素而不需要HTML标签,从而简化HTML结构

    ::before    在元素内部的前面插入内容
    ::after     在元素内部的后面插入内容

    before和after创建一个元素,但是属于行内元素
    新创建的这个元素在文档树中找不到 我们称为伪元素
    语法: element::before[]
    before和after必须有content属性
    before在父元素前面创建元素 after在父元素后面创建元素
    伪元素选择器和标签选择器一样 权重为1
```

伪元素清除浮动

```js
    .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    额外标签法清除浮动的原理:
        在父盒子的子盒子的后面 添加一个空的盒子div 然后添加clear:both 即可清除浮动
        清除浮动的核心代码就是 clear: both

    使用伪元素的方式清除浮动的原理:
        伪元素清除浮动其实就是额外标签法的升级版本  本质上是一样的
        content: ""  ----------->  伪元素必须使用这个content属性
        display: block  -------->  清除浮动必须是块级元素 伪元素是行内元素 所以需要转换一下
        height: 0
        visibility: hidden;  ---->  这两个属性是为了隐藏伪元素 不让其显示
        clear: both     --------->   清除浮动的代码

    闭合标签法的原理: 就是在前面和后面分别加上一个盒子

    使用伪元素的方式实现清除浮动:
        .clearfix:before,.clearfix:after {
            content: "",
            display: table
        }
        .clearfix:after {
            clear: both
        }

    为什么display: table 不转化成block
     因为转化成block 前面和后面的盒子就不会在一行上显示了  就会竖向排列显示了
     display: table ： 转化为块级元素 并且在一行上显示
```

CSS3 盒子模型

```js
    box-sizing:
        content-box:  width + padding + border
        border-box:   width
```

CSS filter

```js
    filter: blur(5px)
```

CSS3 calc()

```js
    width: calc(100%-30px)
```

CSS3 过渡

```js
    transition: 要过渡的属性 花费时间 运动曲线 何时开始
    属性 CSS属性, 宽度高度 背景颜色 内外边距 都可以。如果想要所有的属性都过渡
    写一个all就可以了
    花费时间: 单位是秒(s)
    运动曲线: 默认是ease
    何时开始: 单位是秒 可以设置延迟触发时间 默认是0s (可省略)
```
