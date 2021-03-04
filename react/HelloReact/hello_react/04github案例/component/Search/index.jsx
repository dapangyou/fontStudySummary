import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        // 获取用户的输入
        const { KeyWordElement: { value: keyWord } } = this
        // console.log(value)
        // 发送网络请求
        axios.get(`/api/search/users?q=${keyWord}`).then(
            response => {
                // console.log('成功了', response.data);
                this.props.saveUsers(response.data.items)
            },
            error => {
                console.log('失败了', error);
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.KeyWordElement = c} type="text" placeholder="输入关键字,点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
