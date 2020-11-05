define(["jquery", "service/salemanService", "add"], function($, salemanService, add) {
    return function() {

        var salemanList = salemanService.getList();
        var rowsStr = salemanList.map(item => {
            return `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
        }).join("");
        var str = `<div>
                        <div>操作:
                            <button class="add">添加</button>
                            <button>查询</button>
                        </div>
                        <table border="10" cellpadding="30">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>年龄</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rowsStr}
                            </tbody>
                        </table>
                   </div>`;

        var $saleman = $(str);
        // 进行添加操作
        $saleman.on("click", ".add", function() {
            add();
        });
        $("#main .content").html($saleman);


    }
});