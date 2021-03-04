import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css';


export default class Header extends Component {

    // 对接收的props进行类型以及必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        // 函数体
        if (keyCode !== 13) return
        // 添加的todo不能为空
        if (target.value.trim() === '') {
            return;
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text"
                    placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
