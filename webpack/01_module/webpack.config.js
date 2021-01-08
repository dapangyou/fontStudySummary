module.exports = {
    // 入口
    entry: {
        // 可以有多个入口 也可以有一个 如果只有一个就默认从这一个入口开始分析
        "main": "./main.js"
    },
    output: {
        filename: "./build.js"
    },
    // 监听文件改动自动产出build.js
    // watch: true,
    // 声明模块
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                loader: "url-loader?limit=40000"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}