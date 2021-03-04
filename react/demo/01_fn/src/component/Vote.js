
import React from 'react';




























/**
 * React生命周期
 *  [调取组件]
 *      contructor
 *      componentWillMount 第一次渲染之前
 *      render             渲染
 *      componentDidMount  第一次渲染之后
 *  [组件重新渲染: 内部状态改变、传递给组件的属性改变]
 *      状态改变:
 *          shouldComponentUpdate
 *              ===> 是都允许组件更新: 返回true是允许,返回false则不再继续走下去
 *          componentWillUpdate
 *              ===> 更新之前: 和should一样 方法中通过this.state.xxx获取的还是更新之前的
 *                            状态信息,方法中有两个参数nextProps/nextState存储的是最新的属性和状态信息
            render 更新
            componentDidUpdate 更新之后
        属性改变
            conponenetWillReceiveProps(nextProps/nextState)
                ==> 接收最新属性之前 基于this.props.xxx获取的是原有的属性信息,nextProps存储的是最新传递的属性信息
                ==>
            shouldComponentUpdate
 *              ===> 是都允许组件更新: 返回true是允许,返回false则不再继续走下去
 *          componentWillUpdate
 *              ===> 更新之前: 和should一样 方法中通过this.state.xxx获取的还是更新之前的
 *                            状态信息,方法中有两个参数nextProps/nextState存储的是最新的属性和状态信息
 *           render 更新
            componentDidUpdate 更新之后
        [属性销毁]
            componentWillUnmount
                ==> 组件销毁之前

            组件的属性是只读的 只能调取组件的时候传递进来 不能自己在组件内部修改
            组件的状态是可读写的: 状态的改变会引发组件的重新更新(状态是基于setState改变)
            组件实例上可以放一些信息: 这些信息只是为了方便在组件内任意方法中获取和使用的

        实例上挂载的refs: 就是用来操作DOM
        实例上挂载的context是用来实现组件之间信息传递的
 *
 */






























/**
 * ref是React中提供的操作DOM的方式
 *  1.给需要操作的元素设置ref (保持唯一性 否则会覆盖)
 *  2.在实例上挂载了refs属性 它是一个对象 存储了所有设置ref的元素 （ref值：元素对象）
 *  3.
 */
// export default class Vote extends React.Component {
//     constructor(props) {
//         super(props);  // => React.Component.call(this) 可以把Componenet中私有属性继承过来

//     }
//     render() {
//         let { title, children } = this.props;

//         // isNaN(rate) ? rate = 0 : rate = ;
//         return <section className={'panel panel-default'} style={{ width: '50%', margin: '20px auto' }}>
//             <div className={'panel-heading'}>
//                 <h3 className={'panel-title'}>
//                     {title}
//                 </h3>
//             </div>
//             <div className={'panel-body'}>
//                 支持人数: <span ref={'AA'}>0</span>
//                 <br />
//                 反对人数: <span ref={'BB'}>0</span>
//                 <br />
//                 支持比率: <span ref={'RATE'}>0</span>
//                 <br />
//                 <br />
//                 {/* 存放自己调取组件时候 额外扩展的标记 */}
//                 {/* 显示props.children的两种方式 */}
//                 {children}
//             </div>
//             <div className={'panel-footer'}>
//                 <button className={'btn btn-success'} onClick={this.support}>支持</button>
//                 &nbsp;&nbsp;&nbsp;&nbsp;
//                 <button className={'btn btn-danger'} onClick={this.against}>反对</button>
//             </div>

//         </section>;
//     }

//     support = ev => {
//         // console.log(this.refs);
//         this.refs.AA.innerHTML++;
//         this.computed();
//     };

//     // 反对
//     against = ev => {
//         this.refs.BB.innerHTML++;
//         this.computed();
//     }
//     computed = () => {
//         let { AA, BB, RATE } = this.refs,
//             n = parseFloat(AA.innerHTML),
//             m = parseFloat(BB.innerHTML),
//             rate = (n / (n + m)) * 100;
//         isNaN(rate) ? rate = 0 : rate = (n / (n + m)) * 100;
//         RATE.innerHTML = rate.toFixed(2) + '%';

//     }
// }




// 基于类的方式创建组件 (基于集成Componenet类实现)
/**
 * 1.调取组件相当于是创建类的实例(this) 把一些私有的属性挂载到实例上了
 *   这样组件内容所有的方法都可以基于实例获取这些值
 *   (包括传递的属性和自己管理的状态)
 * 2.  有自己的状态管理，当状态改变的时候，React会重新渲染视图
 *      (差异更新: 基于DOM-DIFF只把需要渲染的部分渲染即可)
 */
// export default class Vote extends React.Component {
//     constructor(props) {
//         super(props);  // => React.Component.call(this) 可以把Componenet中私有属性继承过来
//         // --- this.props  
//         // --- this.state  
//         // --- this.context 
//         // --- this.setState
//         // --- this.refs
//         // --- this.updater

//         // 初始化状态
//         this.state = {
//             n: 0,
//             m: 0
//         };


//     }
//     render() {
//         let { title, children } = this.props,
//             { n, m } = this.state,
//             rate = n / (n + m) * 100;
//         isNaN(rate) ? rate = 0 : rate = n / (n + m) * 100;
//         // isNaN(rate) ? rate = 0 : rate = ;
//         return <section className={'panel panel-default'} style={{ width: '50%', margin: '20px auto' }}>
//             <div className={'panel-heading'}>
//                 <h3 className={'panel-title'}>
//                     {title}
//                 </h3>
//             </div>
//             <div className={'panel-body'}>
//                 支持人数: <span>{n}</span>
//                 <br />
//                     反对人数: <span>{m}</span>
//                 <br />
//                     支持比率: <span>{rate.toFixed(2) + '%'}</span>
//                 <br />
//                 <br />
//                 {/* 存放自己调取组件时候 额外扩展的标记 */}
//                 {/* 显示props.children的两种方式 */}
//                 {children}
//             </div>
//             <div className={'panel-footer'}>
//                 <button className={'btn btn-success'} onClick={this.support}>支持</button>
//                 &nbsp;&nbsp;&nbsp;&nbsp;
//                 <button className={'btn btn-danger'} onClick={this.against}>反对</button>
//             </div>

//         </section>;
//     }

//     /**
//      * 为什么使用箭头函数呢?
//      *      使用箭头函数是为了保证方法中的this永远是实例本身。(无论在哪执行这个方法)
//      *      ev.target: 获取当前操作的事件源(DOM元素)
//      */
//     support = ev => {
//         this.setState({
//             // 修改状态信息并且通知render重新渲染(异步操作: 如果有其他代码执行 先执行其他代码 然后再去通知状态修改)
//             n: this.state.n + 1
//         }, () => {
//             // 回调函数一般不用: 当通知状态更改完成 并且页面重新渲染完成后 执行回调

//         });
//     };

//     // 反对
//     against = ev => {
//         this.setState({
//             m: this.state.m + 1
//         }, () => {

//         });
//     }
// }



//=> 函数式组件声明: 创建一个函数 里面返回JSX

/**
 *  调取组件的时候: Babel解析 传递给CREATE-ELEMENT的第一个参数type不再是一个字符串标签名,
 *  而是一个函数(类),生成的对象中 type也是一个函数 当render渲染的时候会根据type类型做出不同的事情
 *  (如果是字符串就创建新元素 如果是函数 就会把函数执行,把返回的JSX对象创建成为新的元素进行渲染)
 *   函数执行的时候会把解析出来的对象中的props作为属性传递给组件
 *
 *    函数式组件声明的特点:
 *      1.会把基于create-element解析出来的对象中的props最为参数传递给组件(可以完成多次调取组件传递不同的信息)
 *      2.一旦组件调取成功,返回的JSX就会渲染到页面上,但是后期不通过重新调取组件或者DOM元素操作的方式 很难再把渲染好的组件的内容更改
 *          ===> 函数式组件声明是静态组件
 */
// export default function Vote(props) {
//     // => props：调取组件的时候传递进来的属性信息
//     console.log(props.children);
//     return <section className={'panel panel-default'} style={{ width: '50%', margin: '20px auto' }}>
//         <div className={'panel-heading'}>
//             <h3 className={'panel-title'}>
//                 {props.title}
//             </h3>
//         </div>
//         <div className={'panel-body'}>
//             支持人数: <span>0</span>
//             <br />
//             反对人数: <span>0</span>
//             支持比率: <span>0%</span>
//             <br />
//             <br />
//             {/* 存放自己调取组件时候 额外扩展的标记 */}
//             {/* 显示props.children的两种方式 */}
//             {props.children}
//             {
//                 React.Children.map(props.children, item => {
//                     return item;
//                 })
//             }
//         </div>
//         <div className={'panel-footer'}>
//             <button className={'btn btn-success'} onClick={() => {

//             }}>支持</button>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <button className={'btn btn-danger'}>反对</button>
//         </div>

//     </section>;
// }

