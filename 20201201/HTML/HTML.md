```js
    1.段落标签 p
    p成一段 会把内容分成段 段落会随着屏幕的大小而自动自适应
    2.换行标签 <br/>
    将文字强制换行
    -----段落和换行的区别-------------------------
    段落和段落之间有较大的空隙
    换行只是换行
```

文本格式化

```js
    // 1.加粗标签
    <strong></strong>   //语义更加强烈
    <b></b>
    // 2.斜体标签
    <em></em>          //语义更加强烈
    <i></i>
    // 3.删除线
    <delete></delete>  //语义更加强烈
    <s></s>
    // 4.下划线
    <ins></ins>
    <u></u>
```

盒子标签 ---- 非语义标签

```js
    <div>和<span>是没有语义的 就是盒子标签
    div 独占一行
    span 一行显示
```

链接

```js
    链接分为
    外部链接:
         <a href="http://www.baidu.com" target="_blank">外部标签 _blank</a>
         <a href="http://www.baidu.com" target="_self">外部标签 _self</a>
        _blank: 新窗口中打开
        _self: 当前窗口中打开
        默认是当前窗口中打开
    内部链接:
        <a href="source/gongsijianjie.html">公司简介...</a>
    空链接: 当暂时还不知道放什么链接的时候使用#代替
        <a href="#"></a>
    下载链接:
         <a href="./source.zip">下载文件</a>
    网页元素链接:
        网页中的各种元素 如文本、图像、表格、视频等都可以添加超链接
```

锚点链接

```js
    <a href="#live">个人生活</a>
    <div id="live">1111111111</div>
    <a href="#self">个人生活22222</a>
    <div id="self">22222222</div>
```

表格
作用: 展示数据

```js
    单元格: td
    表头单元格: th
    表头单元格有什么特点:
        居中且加粗显示
    table标签中的属性:
    表格居中: align="center"   left right
    表格边框: border="1"       "" 默认无边框
    cellpadding="20"          表格中内容和表格边框的距离  决定单元格的大小
    cellspacing="0"           单元格和单元格的距离
    width="500px" height="250px"       设置表格的宽度和高度

    thead: 是表头区域
    th: 是表头单元格

    thead和tbody主要是让表格更具有语义。

    合并单元格:
        跨行合并： rowspan: "4"
        跨列合并:  colspan: "4"
```

列表:

```js
列表的作用是用来布局的
列表最大的特点就是整齐、整洁、有序 它作为布局更加自由和方便
列表可分为
有序列表:
    使用场景:有顺序的排列
    ol中只能放li
    li中就可以放任何元素
无序列表:
    ul
        li
        li
    ul
    无序列表是并列的
    ul的子节点只能是li
    li中可以放任何元素
    <li>
        <p></p>
    </li>
自定义列表:
    用于对术语名词进行解释
    <dl>
        <dt></dt>
        <dd></dd>
        <dd></dd>
    </dl>

```
