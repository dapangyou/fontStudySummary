define(["jquery", "service/salemanService", "require", "saleman"], function($, salemanService, require, saleman) {
    return function() {
        var addStr = `
            <form>
                <label>姓名:</label><input name="name"/>
                <label>年龄:</label><input name="age"/>
                <button type="submit">提交</button>
            </form>
        `;

        // 把同步的表单变成异步的表单 阻止form表单的默认行为
        var $add = $(addStr);
        $add.on("submit", function(e) {
            e.preventDefault();
            // 2.自己获取表单数据 进行数据操作
            var name = $(this).find("input[name=name]").val();
            var age = $(this).find("input[name=age]").val();
            // console.log(name, age);
            salemanService.add(name, age);
            // 3.回到Index界面
            // $(".aside .aside-item:eq(0)").trigger("click");
            require("saleman")();
        });


        $("#main .content").html($add);
    }
});