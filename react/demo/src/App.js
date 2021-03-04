import React, { Component } from 'react'
class App extends Component {
    constructor() {
        // 初始化属于组件的属性
        super();
        this.state = {
            num: 1
        }
    }
    changeHandler(e) {
            console.log(e.target.value);
            console.log('change触发了');
            // 通知试图更新
            this.state.num = e.target.value;
            this.setState({

            });
        }
        // 1.使用JSX必须使用react
        // 2.组件必须React.Component
    render() {
        // 保证一个根节点
        return ( < div > 大家好 我是react { this.state.num }

            <
            input type = "text"
            value = { this.state.num }
            onChange = {
                (e) => {
                    this.changeHandler(e)
                }
            }
            /> < /
            div > );
    }
}
export default App;