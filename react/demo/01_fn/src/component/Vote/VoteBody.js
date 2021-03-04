import React from 'react';
import PropTypes from 'prop-types';

export default class VoteBody extends React.Component {

    /**
     * 子组件中设置传递进来的上下文对象
     *      子组件中设置使用传递进来的上下文类型：设置哪个类型 子组件上下文中才有哪个属性
     *      不设置的是不允许使用的
     *      this.context.xxxx
     */
    static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    };

    constructor(props, context) {
        super(props, context);
        // console.log(this);

        // init state
        let { n, m } = this.props.store.getState().vote;
        this.state = { n, m };

    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            let { n, m } = this.props.store.getState().vote;
            this.setState({
                n, m
            });
        });
    }

    render() {

        let { n, m } = this.context,
            rate = (n / (n + m)) * 100;
        isNaN(rate) ? rate = 0 : rate = (n / (n + m)) * 100

        return <section className={'panel-body'}>
            支持人数: <span>{n}</span>
            <br />
            反对人数: <span>{m}</span>
            <br />
            支持比率: <span>{rate.toFixed(2) + '%'}</span>
        </section>
    }
}