```js
    1.react是facebook公司开发的一款MVC版的JS框架
    MVC: Model(数据层)  View(视图层)  Controller(控制层)
    核心思想 通过数据的改变来影响视图(数据驱动的思想)

    2.基于脚手架 Create-React-App 快速构建一个React工程结构
    自动安装React的核心组件 React/React-DOM
    自动安装webpack 并且完成相关的配置
            区分开发环境和生产环境
            安装babel以及对应的语言解析包 可以把React和ES6进行编译
            安装CSS/STYLE/FILE等加载器 处理CSS等合并压缩的问题
            安装ES-LINT可以进行代码检测
            安装了很多的插件 可以实现JS和CSS以及HTML的分离 打包和压缩
            安装了wbpack-dev-server 可以在开发环境下 编译后自动创建服务
            打开浏览器 当代码修改后 自动保存编译 页面自动刷新渲染等

    3.脚手架的使用
        (1)  把脚手架安装到全局环境下 以后应用命令操作 完成项目结构的搭建
            npm install create-react-app -g
        (2) 创建项目结构目录
            项目名遵循npm发包命令规范 名字只能是 /^[a-z0-9_-]$/
            create-react-app 项目名
            特点: 如果当前电脑安装了yarn 创建工程目录的时候 走的是yarn安装
            yarn和npm 主体相同 但是处理起来还有一定的区别 所以
            我们以后继续向工程中安装模拟以后执行配置脚本打包编译的时候，
            尽可能使用yarn 不建议和npm混用
    4.安装完成后的工程目录
        node_modules
            .bin ： 所有在本地可执行的命令脚本(react-script.cmd)
            ....
        package.json: 当前项目的配置清单
        public: 存放的是当前项目的HTML页面(有可能放一部分静态资源)
            -index.html
            .....
        src: 存放的是项目需要的所有JS或者静态资源(包括组件 store 路由
             数据模型 AJAX请求等)
            index.js: 当前项目的入口
     4.暴露webpack配置项
        脚手架在构建项目的时候 为了结构的美化 把所有的webpack配置等都隐藏到了node_modules下  (react-script中)
        真实的项目中 我们经常会基于脚手架构建的结构 自己再安装一些配置信息
        (例如 Less处理配置 ) 此时 我们需要把配置项暴露出来
            `yarn eject` 此操作是不可逆转的 (而且操作之前需要把所有修改文件提交到仓库中)

         config:
            webpack.config.dev.js 开发环境下的WP配置
            webpack.config.prod.js 生产环境下的WP配置
            paths.js 基本配置项 (包含项目入口信息)
         scripts:
            start.js  / build.js  / test.js
            当我们执行yarn start/build/test的时候 执行的就是这三个js

      5. 可执行的本地脚本命令
        yarn start 开发预览
            创建一个端口号为3000 协议为http的web服务
            按照webpack.config.dev.js 把项目编译
            打开浏览器 预览我们正在开发的项目
            当项目文件修改的时候 自动重新编译 浏览器页面自动刷新 展示最新的效果

        [windows]
            set HTTPS = true && yarn start
            set PORT = 1234  && yarn start
        [MAC/LINUX]
            HTTPS=true&&yarn start
            PORT=1234 &&yarn start

        yarn build
            生成一个build文件夹 存放最后打包的文件
            基于webpack.config.prod.js 把项目进行编译打包
            部署上线的时候  只需要把build中的内容发布即可


        ============================================================================================
        1.React是基于独有的JSX语法实现视图(数据和HTML)渲染的
        2.JSX语法
            A:JSX语法的渲染使用的是ReactDOM.render
            ```js
                ReactDOM.render([JSX元素],[指定的容器],[回调,当我们把JSX放到指定的容器中，触发执行的函数]);
            ```
            B: JSX = JAVASCRIPT + XML (HTML)
            ```js
                1.不推荐存放JSX的容器是BODY (写Body会报错)
                一般都是使用我们自己创建的一个元素 (例如: 创建#root的Div容器)
                ReactDOM.render(<h2>珠峰培训</h2>,root);
                2.不允许出现两个根元素 需要绑定两个根元素 需要在最外层嵌套一个根元素
                3.把数据嵌入到JSX中
                    let name = '珠峰培训';
                    let data = [{id:1,title: 'xxx'},{id: 2,title: 'yyyy'}];
                    ReactDOM.render(<div>
                        <h2>{name}</h2>
                        <h3>哈哈</h3>
                        <h3>'哈哈'</h3>
                        // JSX中不能存放一个对象或者函数
                        // 可以存放函数的执行
                        <h3>{data}</h3>
                    </div>,root);
                    注意: 把数据嵌入到JSX中 (不是嵌入到元素的属性中，而是正常的内容中)
                    可以嵌入变量或者直接的数据
                     ==> 不能嵌入对象(代指: {} 、 /^$/ 、 日期对象 、 函数、或者数组中的某一项是前面的也不行
                            [一维简单数组是可以的])
                     ==> 可以嵌入基本类型值(null/undefined/布尔值都是空元素 也就是不显示任何内容的值)
                     ==> 大括号中可以嵌入JS表达式(执行JS代码需要有返回结果)
                     循环创建的JSX元素需要设置标识key 并且在当前循环的时候 这个key是唯一的
                     使用map是因为他有返回值 返回的是替换后的数组

                     ===> 使用三元运算符解决判断 (if和switch都不可以)
                    4. 可以给JSX元素设置属性
                       ==> 属性值对应大括号中的对象、函数都可以放 (也可以放JS表达式)
                       ==> style属性必须是对象(不能是字符串)
                       ==> class 用class-name 代替
                        
            ```

```

```js
ReactDOM.render(<section
    id={'box'}
    className={'box'}
    style={{ color: 'red' }}
    onClick={(ev) => {
        console.log('123', ev);
    }}
>
    珠峰培训
    <h2 className={'title'}>课程体系</h2>
    <p className={'content'}>最强大的课程体系 打造大前端 全栈前端 工程化前端等</p>
</section>, root);


React是如何将JSX元素转换成真实的DOM并且添加到页面中?????
    1.基于babel/babel-loader/babel-preset-react-app 把JSX语法编译为react-create-element这种模式
        ===> create-element 中至少有两个参数 没有上限
        第一个: 目前是当前元素标签的标签名(字符串)
        第二个: 属性(没有给元素设置属性则为null)
        其他的: 当前元素的所有子元素内容(只要子元素是HTML 就会变成新的create-element)
    2.执行create-element 把传递进来的参数最后处理成为一个对象
    {
        type: '标签名',
        props:{
            // 自己设置的那些对象(但是对于key和ref来说是要提取出来的)
            // children: 存放自己子元素 (没有子元素就没有这个属性)  如果有多个子元素 就以数组的形式存储信息
        },
        ref: null,
        key: null
    }
    3.把生成的对象交给render进行处理 把对象变成DOM元素 插入到指定的容器中
```

基于REDUX来进行状态管理,实现组件之间的信息传输(常用方案)
    REDUX可以应用在任何的项目中(VUE/JQ/REACT的都可以) REACT-REDUX才是专门给REACT项目提供的方案

```js
    什么是redux?
        redux不是专门给react开发的。其他项目也可以使用。
        redux是进行状态统一管理的类库。
        为什么要使用redux?
            1.只要两个或者多个组件之间想要实现信息共享 都可以基于redux解决 把共享的信息存储到redux容器中进行管理
            2.还可以使用redux做临时存储: 页面加载的时候,把从服务器获取的数据信息存储到redux中,
                组件渲染需要数据,从redux中获取,这样只要页面不刷新,路由切换的时候,再次渲染组件不需要重新产品能够服务器拉取数据。
                直接从redux中获取即可。
```


