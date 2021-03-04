import React from 'react';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import VoteHeader from './VoteHeader';
import PropTypes from 'prop-types';

export default class Vote extends React.Component {
    static defaultProps = {
        title: '标题不知道,随便投吧!!!',
        count: {
            n: 0,
            m: 0
        }
    }

    /**
     *  在父组件中
     *      1.设置子组件上下文属性值类型
     *      2.获取子组件上下文(设置子组件的上下文信息)
     */
    //名字固定
    static childContextTypes = {
        // n:
        n: PropTypes.number,
        m: PropTypes.number,
        callBack: PropTypes.func
    };


    getChildContext() {
        // => return的是啥就是相当于给子组件上下文设置的是啥
        let { n, m } = this.state;
        return {
            n,
            m,
            callBack: this.updateContext
        }
    }

    updateContext = type => {
        // TYPE: 'support/against'
        // 如果type
        if (type === 'support') {
            this.setState({
                n: this.state.n + 1
            });
            return;
        }
        this.setState({
            m: this.state.m + 1
        });
    }

    constructor(props) {
        super(props);
        // init state
        // let { count: { n = 0, m = 0 } } = this.props;
        let { store } = this.props,
            { n, m } = store.getState().vote;
        this.state = { n, m };
    }

    render() {


        let { store } = this.props;

        let { title, count } = this.props;
        return <section className={'panel panel-default'}
            style={{ width: '50%', margin: '20px auto' }}>
            <VoteHeader title={title} />
            <VoteBody count={count} store={store} />
            <VoteFooter store={store} />
        </section>
    }
}