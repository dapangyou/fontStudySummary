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