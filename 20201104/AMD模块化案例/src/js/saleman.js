define([], function() {
    return function() {
        // console.log("销售员的初始化");
        var str = `<div>
                        <div>操作:
                            <button>添加</button>
                            <button>查询</button>
                        </div>
                        <table></table>
                   </div>`;
        $("#main .content").html(str);
    }
});