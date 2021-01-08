var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口
    entry: {
        // 可以有多个入口 也可以有一个 如果只有一个就默认从这一个入口开始分析
        "main": "./src/main.js"
    },
    output: {
        // path相对转绝对
        path: path.resolve('./dist'),
        filename: "./build.js",
    },
    plugins: [
        // 插件的执行顺序和元素索引有关
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}