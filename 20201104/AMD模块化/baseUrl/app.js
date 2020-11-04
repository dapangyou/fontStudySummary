require.config = {
    baseUrl: "js", //配置以入口函数为基础配置文件路径
    paths: {
        // path的配置也是相对于入口文件的
    }
}

require([], function() {
    console.log("首页");
})