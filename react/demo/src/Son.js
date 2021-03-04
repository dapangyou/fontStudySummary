import React, { Component, component } from 'react'
import PropTypes from 'prop-types';
class Son extends Component {

    // 属性的约定和默认值

    static propTypes = {
        text: PropTypes.string
    }
    static defaultProps = {
        text: 'abc'
    }







    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        let { age, name, text } = this.props;
        console.log({ text });
        return ( < div >
            我是子组件, 数据如下： <
            hr / > { text } **
            **
            **
            **
            ** ** ** ** ** { /* this.pro   ps是一个对象 可以在这里输出 */ }

            {
                /* { age } { name } { this.props.header }

                            <
                            div style = {
                                { backgroundColor: 'red' }
                            } >

                            { this.props.children }

                            <
                            /div>

                            { this.props.footer }  */
            }

            <
            /div>)
        }
    }
    export default Son;