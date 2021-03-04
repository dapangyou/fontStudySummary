import React, { Component } from 'react';
import Search from './component/Search';
import List from './component/List';

export default class App extends Component {


    state = {
        // 初始状态 users初始值为数组
        users: [],
        isFirst: true,   //是否第一次打开页面
        isLoading: false,  //标识是否处于加载中
        err: ''            //存储请求相关的错误信息
    }

    saveUsers = (users) => {
        this.setState({
            users
        })
    }

    render() {
        const { users } = this.state
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers} />
                <List users={this.state.users} />
            </div>
        )
    }
}
