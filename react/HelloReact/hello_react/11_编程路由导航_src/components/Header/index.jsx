import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {


    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
            </div>
        )
    }
}

// withRouter 一般组件加工变成路由组件
export default withRouter(Header)
// withRouter的返回值是一个新组件
