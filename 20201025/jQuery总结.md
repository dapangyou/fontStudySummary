    概念:jQuery对象和DOM对象
        jQuery对象是使用jQuery的方法获取的
        jQuery对象的本质是: 利用$对DOM对象包装后产生的对象(是以伪数组的形式存储的)
        DOM对象是利用JS获取的对象
        <!-- 注意 -->
        jQuery对象只能使用jQuery的方法,DOM对象只能使用原生JS的属性和方法

    关于jQuery隐式迭代的理解：
        因为jQuery获取的是一个jQuery对象的伪数组,而隐式迭代指的是可以将伪数组中的匹配元素
        进行遍历循环。

```js
// 选中的div是一个伪数组 然后会对所有的元素进行遍历后执行相应的操作
$("div").css("color", "red");
```

    jQuery选择器可使用parent children find选择对应的层级元素
    parent: 选择直接父级元素
    children: 选择直接子级元素
    find: 寻找所有的子级元素
    使用选择器的时候可以直接使用css中的层级选择
    $("ul>li") //选择ul下的li

     //除了自身元素的所有兄弟元素
     $("ul .item").siblings("li").css("background","pink");

```js
// jQuery隐式迭代的小案例
// 假若html中有多个button按钮标签 想要点击哪个按钮 哪个按钮就改变背景颜色
// 实现 ：  使用的是隐式迭代的排他思想
$(function () {
  // 1.获取所有的按钮
  $("button").click(function () {
    // 2.改变当前点击的按钮的背景颜色
    $(this).css("background", "pink");
    // 3.将非当前点击的按钮的背景颜色去掉
    $(this).siblings.css("background", "");
  });
});
```

        <!-- jQuery操作CSS -->

```js
// 当只有一个参数的时候获取css属性
var width = $("div").css("width"); //200px
// 当有2个属性的时候,修改样式
$("div").css("width", "400px");
// 当有很多个属性的时候 可以使用对象的方式
$("div").css({
  width: "200px",
  height: "200px",
});
```

        <!-- jQuery操作CSS类样式 -->
        当样式较为复杂并且经常移除和添加的时候可以使用此方式
        一共有三种
        addCladd removeClass toggleClass 分别添加 移除 切换样式
