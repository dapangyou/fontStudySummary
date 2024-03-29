伪类选择器

链接伪类

```js
a:link 选择所有未访问的链接
a:visited 选择所有已访问的链接
a:hover 选择鼠标指针位于其上的链接
a:actived 选择活动链接
```

```js
    注意: 1.为确保生效 请按照LAHA的顺序声明
```

focus 伪类选择器

```js
    :focus 伪类选择器用于获取焦点的表单元素
    焦点就是光标 一般情况下 <input> 类表单元素才能获取
    因此这个选择器也主要针对于表单来说
    input:focus {
        background-color: yellow
    }
```

元素显示模式

```js
    什么是元素的显示模式?
        元素以什么样的方式进行显示。
        HTML元素一般分为块元素和行内元素两种
    块元素:
        <h1>~<h6> <p> <div> <ul> <ol> <li>
    块元素的特点:
        1.独占一行
        2.高度 宽度 外边距及内边距都可以控制
        3.宽度默认是容器(父级宽度)的100%
        4.是一个容器及盒子 里面可以放行内或者块级元素

    注意: 文字类的元素不能使用块级元素
        <p>标签主要用于存放文字 因此不能在<p>里面存放块级元素 特别不能放<div>
        同理: <h1>~<h6>等都是文字类块级元素 里面也不能放其他块级元素

    行内元素
        <span> <a>
    行内元素特点:
        1.相邻行内元素在一行 一行可以显示多个
        2.高度、宽度设置是无效的
        3.默认宽度就是它本身内容的宽度
        4.行内元素只能容纳文本或其他行内元素

    行内块元素:
        同时具有块元素和行内元素的特点
        特点：
            一行可以有多个行内块元素
            默认宽度就是本身的宽度
            高度、行高、外边距及内边距都可以控制

    **注意:**
        行内块元素在一行内显示的时候 行内块元素之间会有空格

```

```js
    背景:
        1.背景颜色
            background-color: transparent;color
            可用2种值 第一种 transparent 透明颜色
                     第二种  red 具体颜色
        2.背景图片
            background-image: url(图片的url路径)
        3.图片平铺
            background-repeat:
                no-repeat
                repeat
                repeat-x
                repeat-y
        4.背景图片位置
            background-position
                1.center center  // x轴 y轴都居中 方位名词没有顺序问题
                2.center         //省略一个方位名词 另外一个方位名词默认为center
                3.20px 30px      //精准定位 距离左侧20px  距离顶部30px  第一个参数一定是水平 第二个参数一定是垂直方向上的
                4.center 50px    // 混合定位 第一个参数水平 第二个参数垂直
            精准定位和混合定位参数的顺序是一定的
        5.背景固定
             background-attachment:
                1.fixed  背景固定
                2.scoll  背景滚动
        6.背景混合写法
            background(背景颜色 背景图片地址 背景平铺 背景滚动 背景图片位置)
        7.背景颜色半透明
           background-color: rgba(0, 0, 0, 0.5)
           最后一个参数就是设置透明度的  0为全透明 1为不透明

```

CSS 三大特性

```js
    层叠性: 相同的选择器和相同的样式 后面设置的会覆盖前面设置的  层叠性主要解决 样式冲突的问题
    如果样式冲突 就近原则
    样式不冲突 不会重叠
    继承性: 孩子会继承父亲的样式
            恰当的使用继承可以简化代码 降低CSS样式的复杂性
            并不是所有的样式会继承 是和文字相关的样式会继承
            例如 text-, font-,line-,以及color等属性会继承
        行高的继承:
            div {
                font: 12px/1.5
                // 1.5意思是行高  行高是当前文字的1.5倍  经计算 当前div的行高是18px
            }
    优先级:
        选择器相同则执行层叠性
        选择器不同则根据选择器权重执行

        选择器权重

        选择器                   选择器权重
        继承或者*                   0,0,0,0
        元素选择器                  0,0,0,1
        类选择器,伪类选择器          0,0,1,0
        ID选择器                    0,1,0,0
        行内样式style=""            1,0,0,0
        !important重要的            ∞无穷大

        继承的权重为0

        复合选择器的权重会叠加
        权重虽然会叠加 但是一定不会有进位的问题
```
