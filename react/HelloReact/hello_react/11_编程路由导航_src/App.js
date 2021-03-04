import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'    //About是路由组件
import Home from './pages/Home'      //Home是路由组件
import Test from './pages/Test'
import Header from './components/Header'    //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        {/* <div className="page-header"><h2>React Router Demo</h2></div> */}
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生HTML中靠a标签跳转到不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在react中靠路有链接切换组件 */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home" >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
