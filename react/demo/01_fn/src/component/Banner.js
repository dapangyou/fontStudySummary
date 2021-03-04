import React, { Component } from 'react'
import '../static/css/banner.css';

export default class Banner extends React.Component {
    // 属性不可更改 可以设置默认值
    static defaultProps = {
        data: [],
        interval: 1000,
        step: 1,
        speed: 300,
        style: {}
    };

    constructor(props) {
        super(props);
        let { step, speed } = this.props;
        this.state = {
            step,
            speed
        }
    }

    componentWillMount() {
        // 数据克隆
        let { data } = this.props,
            cloneData = data.slice(0);
        cloneData.push(data[0]);
        cloneData.unshift(data[data.length - 1]);
        this.cloneData = cloneData;
    }


    componentWillUpdate(nextProps, nextState) {
        // 如果当前最新修改的step值已经大于最大索引 说明不能继续向右走了 我们应该让其立即吴东华
        if (nextState.step > (this.cloneData.length - 1)) {
            this.setState({
                step: 1,
                speed: 0
            });
        }
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        // 开启自动轮播
        this.autoTimer = setInterval(this.moveRight, this.props.interval);
    }

    // 向右切换: 自动轮播或者点击切换按钮
    moveRight = () => {
        this.setState({
            step: this.state.step + 1
        });
    }

    render() {

        let { data } = this.props,
            { cloneData } = this;
        if (data.length === 0) {
            return '';
        }

        // => 初始化状态
        let { step, speed } = this.state,
            wrapperStyle = {
                width: `${cloneData.length * 1000}px`,
                transform: `translateX(${-step * 1000}px)`,
                transition: `transform ${speed}ms`
            }
        return <section className={'container'}>
            <ul className={'wrapper'}>
                {cloneData.map((item, index) => {
                    let { pic, title } = item;
                    return <li key={index}>
                        <img src={pic.default} alt={title} />
                    </li>
                })}

            </ul>
            <ul className={'focus'}>
                {data.map((item, index) => {
                    return <li key={index}>

                    </li>
                })}
            </ul>
            {/* <a href="javascript:;" className="arrow arrowLeft"></a>
            <a href="javascript:;" className="arrow arrowRight"></a> */}
        </section>
    }


}
