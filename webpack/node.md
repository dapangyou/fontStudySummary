关于webpack的学习
```js
    1.webpack进行打包可以在package.json中进行配置
      "build":"webpack" 就可以将webpack的配置解析为npm run build来运行
      webpack的默认配置文件为webpack.config.js
      也可将默认的配置更改为webpack.dev.config.js 在package.json中配置脚本就可以运行
       "dev": "webpack --config ./webpack.dev.config.js",
    2.webpack解析css
        (1)安装css 
        npm install css-loader style-loader
        css-loader用于解析css
        style-loader用于将解析好的css渲染到页面上
        (2) 配置
        module: {
            loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]
        }
    3.webpack解析图片
    
```