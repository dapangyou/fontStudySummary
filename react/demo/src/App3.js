import React, { Component } from 'react';

class App3 extends Component {


    componentDidMount() {
        // 数据已装载 
        console.log('componentDidMount');
    }
    componentWillMount() {
        console.log('componentWillmount');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    constructor() {
        super();
        this.state = {
            num: 1
        }
    }
    render() {
        // 可以做渲染过滤
        return ( <
            div > { this.state.num } <
            button onClick = { e => this.setState({ num: 99 }) } > 更改数据 < /button> < /
            div >
        )
    }
}

export default App3;