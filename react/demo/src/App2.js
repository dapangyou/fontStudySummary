import React, { Component } from 'react'
export default class App2 extends Component {
    constructor() {
        super();
        this.state = {
                num: 4
            }
            // 初始化函数的指向
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e) {
        console.log(e);
        // 更为严谨的浏览器this指向
        console.log(this);
        this.setState({
            num: e.target.value
        })
    }
    render() {
        return ( <
            div >
            <
            span > { this.state.num } < /span>  <
            input type = "text"
            value = { this.state.num }
            onChange = { this.changeHandler }
            /> <
            button > 点我加1 < /button> < /
            div >
        )
    }
}