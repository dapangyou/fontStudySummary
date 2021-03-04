import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Vote from './component/Vote/Vote'
// import Banner from './component/Banner';
import { createStore } from 'redux';
import store from './store';

let root = document.querySelector("#root");

// 创建容器

/**
 * reducer的作用：
 *      1.记录了所有状态修改信息(根据行为标识 走不同的修改任务)
 *      2.修改容器中的状态信息
 *  参数
 *      state:容器中原有的状态信息(如果是第一次使用,没有原有状态 给一个初始值)
 *      action: dispatch任务派发的时候传递的行为对象(这个对象中必有一个Type属性 是操作的行为标识)
 *              reducer就是根据这个行为标识来识别如何修改状态信息
 */
let reducer = (state = { n: 0, m: 0 }, action) => {
    let { type } = action;
    switch (action.type) {
        case 'VOTE_SUPPORT': state = { ...state, n: state.n + 1 }
            break;
        case 'VOTE_AGAINST': state = { ...state, m: state.m + 1 }
            break;
    }
    // 只有把最新的state返回 原有的状态才会被修改
    return state;
}
/**
 * 创建的store中提供三个方法:
 *  dispatch: 派发行为(传递一个对象 对象中有个type属性) 通知recuder修改状态信息
 *  subscribe： 事件池追加方法
 *  getState     获取最新管理状态信息
 */
let store = createStore(reducer);


/**
 * 1.复合组件: 父组件嵌套子组件
 *   "属性传递"
 *             调取组件的时候,把信息基于属性的方式传递给子组件
 *              (子组件props中存储传递的信息)
 *              这种方式只能父组件把信息传递给子组件 
 *              子组件无法直接的把信息传递给父组件 也就是属性传递是单向的
 *  "执行上下文传递":  
 * 
 *  [子组件也可以修改父组件中的信息]
 *      利用回调函数机制: 父组件把一个函数通过属性或者是上下文的方式传递给子组件
 *                       子组件中只要把这个方法执行即可(也就是子组件中执行了父组件方法,还可以传递一些值过去)
 *                       这样父组件在这个方法中,想把自己的信息改成啥就改成啥
 * 2.平行组件: 兄弟组件或者毫无关系的两个组件
 */
ReactDOM.render(<main>
    {/* title:标题  count:初始支持反对人数 */}
    <Vote title={'英格兰对战巴拿马,哈利凯恩必胜!!!'}
        count={{
            n: 100,
            m: 78
        }
        }
        store={store}
    />
</main>, root);






















/**
 * 真实项目中使用React都是基于组件或者模块开发的
 *  1.函数式创建组件
 *  2.基于类创建组件
 */

/**
 * 准备数据：
 *     在JSX中需要加载一些资源(例如图片) 此时我们不能使用相对地址
 *     webpack打包资源地址都是要改变的，可以使用网络绝对地址或者基于模块规范把图片导入进来使用
 */
// let IMG_DATA = [];
// for (let i = 1; i <= 3; i++) {
//     IMG_DATA.push({
//         id: 1,
//         title: '',
//         pic: require(`./static/images/${i}.jpg`)
//     });
// }
// ReactDOM.render(<main>
//     <Banner data={IMG_DATA}
//         interval={1000}
//         step={1}
//         speed={300}
//     />
// </main>, root);


























// ReactDOM.render(<div>
//     <h2>{1}</h2>
//     <h3>{'哈哈'}</h3>
//     <h4>{true}</h4>
//     <h4>{undefined}</h4>
// </div>, document.body);
// let data = [{ id: 1, title: 'xxx' }, { id: 2, title: 'yyyy' }];
// let name = '珠峰培训';
// ReactDOM.render(
//     <ul>
//         {
//             data.map((item, index) => {
//                 return <li key={index}>
//                     {item.id}
//                     &nbsp;&nbsp;
//                     {item.title}
//                 </li>;
//             })
//         }
//     </ul>
//     , root);

// ReactDOM.render(
//     <ul>
//         {
//             name ? '哈哈' : '呵呵'

//         }
//     </ul>, root
// );

/**
 * JSX语法: JSX元素 / React元素
 */
// ReactDOM.render(<section
//     id={'box'}
//     className={'box'}
//     style={{ color: 'red' }}
//     onClick={(ev) => {
//         console.log('123', ev);
//     }}
// >
//     珠峰培训
//     <h2 className={'title'}>课程体系</h2>
//     <p className={'content'}>最强大的课程体系 打造大前端 全栈前端 工程化前端等</p>
// </section>, root);

// let objJSX = React.createElement = (type, props, ...childs) => {
//     // console.log(1);
//     let ref = null,
//         key = null;
//     'ref' in props ? (ref = props['ref'], props['ref'] = undefined) : null;
//     'key' in props ? (key = props['key'], props['key'] = undefined) : null;
//     return {
//         type,
//         props: {
//             ...props,
//             // 保证children是一项或者是数组多项
//             children: childs.length <= 1 ? (childs[0] || '') : childs
//         },
//         ref,
//         key,
//         $$typeof: Symbol(React.element),
//         _owner: null,
//         _store: {
//             validate: false
//         },
//         _self: null,
//         _source: null
//     };
// }

// let render = (objJSX, container, callback) => {
//     let { type, props } = objJSX,
//         { children } = props,
//         newElement = document.createElement(type);
//     // 循环props
//     for (let attr in objJSX) {
//         if (!objJSX.hasOwnProperty(attr)) break;
//         let valueJSX = objJSX[attr];
//         typeof valueJSX === 'undefined' ? valueJSX = '' : null;
//         // 特殊属性处理
//         // 事件属性
//         let regEvent = /^on/
//         if (regEvent.test(attr)) {
//             newElement.addEventListener(attr.toLocaleLowerCase().substr(2), valueJSX.bind(undefined), false);
//             continue;
//         }
//         switch (attr.toUpperCase()) {
//             case 'CLASSNAME': newElement.setAttribute('class', valueJSX);
//                 break;
//             case 'STYLE':
//                 for (let styATTR in valueJSX) {
//                     if (valueJSX.hasOwnProperty(styATTR)) {
//                         newElement.style[styATTR] = valueJSX[styATTR];
//                     }
//                 }
//                 break;
//             case 'CHILDREN':
//                 (!valueJSX instanceof Array) ? valueJSX = [valueJSX] : null;
//                 valueJSX.forEach(item => {
//                     if (typeof item === 'string') {
//                         newElement.appendChild(document.createTextNode(item));
//                         return;
//                     }
//                     render(item, newElement);  //递归
//                 });
//                 break;
//             default: newElement.setAttribute(attr, valueJSX);
//         }
//         // newElement.setAttribute(attr, valueJSX);
//     }
//     container.appendChild(newElement);
//     callback && callback();

// }
// render(objJSX, root);