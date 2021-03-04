import React, { Component, component } from 'react'
import Son from './Son.js'
class App extends Component {
    constructor() {
        super();
        this.state = {
            age: 12,
            name: "jack"
        }
    }
    render() {
            // 解构赋值
            let { age, name } = this.state;
            let header = ( < div > 头部 < /div>)
                let footer = ( < div > 尾部 < /div>)
                    return ( <
                        div > 我是App组件 以下使用Son组件 < hr / >

                        // 组件的首字母必须要大写
                        <
                        Son age = { age }
                        name = { name }
                        header = { header }
                        footer = { footer } >
                        <
                        ul >
                        <
                        li > 12 < /li> <
                        li > 34 < /li> <
                        li > 56 < /li> < /
                        ul > <
                        /Son> < /
                        div >
                    );
                }
            }
            export default App;