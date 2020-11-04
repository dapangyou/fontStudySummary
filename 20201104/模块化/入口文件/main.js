// console.log("时间普耶");

require.config({
    // baseUrl
    // paths
    // 为什么不适用全局引用 因为防止变量污染
    paths: {
        jQuery: "jquery-3.1" //这样指定jq文件 如果将来发生版本迭代 就只需要改这里一处就好
            // 不是所有的模块都放在这里  一般常用的文件和文件夹可以配置在这里
    }
    // shim
});

require([], function() {
    console.log("首页");
});