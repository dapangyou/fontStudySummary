import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        // const { to, title } = this.props
        return (
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props} ></NavLink>
        )
    }
}
