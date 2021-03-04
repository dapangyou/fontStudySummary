import React, { Component } from 'react'
// 引入store 用于redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {

    state = { count: 0 }

    // componentDidMount() {
    //     //检测redux中状态的变化 只要变化 就调用render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        // const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({
        //     count: count + value * 1
        // })
        const { value } = this.selectNumber
        store.dispatch({ type: 'increment', data: value * 1 })
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: 'decrement', data: value * 1 })
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({ type: 'increment', data: value * 1 })
        }

    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({ type: 'increment', data: value * 1 })
        }, 1000)

    }

    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>++ odd</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>++ async</button>&nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}
