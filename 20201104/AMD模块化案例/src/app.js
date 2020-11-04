require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-3.3.1",
        // 文件夹
        service: "../service"
    }
});

require(["jquery", "saleman"], function($, saleman) {
    // 这种绑定方式比较浪费性能
    // 因为页面已经有了3个元素 所以这种事件会绑定3次
    // 可以使用事件委托的方式：
    // 就是把事件绑定到父元素中  然后让子元素触发
    // $(".aside-item").on("click", function() {

    // });

    $(".aside").on("click", ".aside-item", function() {
        // alert($(this).html());
        // 通过判断元素是否有指定的类名  从而知道要实现什么功能
        if ($(this).hasClass("aside-saleman")) {
            // alert("销售员....");
            // 调用销售员模块
            saleman();
        } else if ($(this).hasClass("aside-car")) {
            // 汽车

        } else if ($(this).hasClass("aside-shop")) {
            // 经销商

        }

    });

    // 默认展示第一个菜单栏的内容
    $(".aside .aside-item:eq(0)").trigger("click");
});