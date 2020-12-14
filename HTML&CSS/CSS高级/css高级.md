精灵图

```js
      为什么需要精灵图技术?
          有效的减少服务器接收和发送请求的次数 提高页面的加载速度
```

字体图标

```js
    轻量级: 一个图标字体要比一系列的图像要小 一旦字体加载了 图标就会马上渲染出来 减少服务器请求
    灵活性: 本质上其实就是文字 可以随意的改变颜色、产生阴影 透明效果
    兼容性: 几乎支持所有的浏览器
```

鼠标样式

```js
    cursor: default 默认鼠标样式
    cursor: pointer 小手
    cursor: move    移动
    cursor: text    文本
    cursor: not-allowed  禁止
```

表单轮廓线 outline: none;

文本域拖动
文本域不能拖动
textarea {
resize: none;
}

vertical-align

```js
 vertical-align的使用场景:  经常用于设置图片或者表单(行内块元素) 和文字垂直对齐 (块级元素不能使用)

 baseline: 默认 元素放置在父元素的基线上
 top:      把元素的顶端与行中最高元素的顶端对齐
 middle:   把此元素防止在父元素的中部
 bottom:   把元素的顶端与行中最低的元素的顶端对齐

```

单行溢出的文字省略号显示

```js
    单行文本溢出显示省略号 -- 必须满足三个条件
    1.先强制一行内显示文本
        white-space: nowrap    (默认normal自动换行)
    2.超出的部分隐藏
        overflow: hidden
    3.文字用省略号替代超出的部分
        text-overflow: ellipsis
```

多行文字溢出省略

```js
    此种方式有较大的兼容性问题 适用于webkit浏览器或移动端
    overflow: hidden;
    text-overflow: ellipsis;
    // 弹性伸缩盒子模型显示
    display: -webkit-box;
    // 限制在一个块元素显示的文本行数
    -webkit-line-clamp: 2;
    // 设置或检索伸缩盒对象的子元素的排列方式 设置垂直居中
    -webkit-box-orient: vertical;
```
