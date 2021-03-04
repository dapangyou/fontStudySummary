function createElement(type, props, children) {
    props = props || {};
    // 1.创建一个对象(默认有)
    let obj = {
        type: null,
        props: {
            children: ''
        },
        ref: null,
        key: null
    };
    obj.type = type;
    // 用传递的type和props覆盖原有的默认值
    obj = {...obj, type, props: {...props, children } };

    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null
    return obj;

}

let styleObj = { color: 'red' }
createElement(h1, {
        id: 'titleBox',
        className: 'title',
        style: styleObj
    },
    '');
/**
 * Render 把创建的对象生成对应的DOM元素  最后插入到页面中
 */


function render(obj, container, callback) {
    let { type, props } = obj || {},
        newElement = document.createElement(type);

    for (let attr in props) {
        // 不是私有的直接结束遍历
        if (!props.hasOwnProperty(attr)) break;
        // 如果当前属性没有值 直接不处理即可
        if (!props[attr]) continue;

        let value = props[attr];
        newElement.setA
    }

    container.appendChild(newElement);
    callback && callback();
}

render(objJSX, root, () => {
    console.log('OK');
})


// 将render解构出来
// import qs from 'qs';
// import './static/index.less';

// 把JSX元素渲染到页面中  就是把虚拟DOM渲染到页面中
// JSX： React 虚拟元素
//  Container: 容器 我们想把元素放到页面中的哪个容器
// CALLBACK 当把内容放到页面中呈现触发的回调函数
/**
 *  JXS react独有的语法 javascript+xml(HTML)
 *  和我们之前拼接的HTML字符串类似 都是把HTML结构
 *  代码和JS代码或者数据混合在一起了 但是不是字符串
 * 
 *  1.不建议我们把JSX直接渲染到BODY中 而是放在自己创建的容器中
 *  一般我们都放在一个ID为root的DIV中即可
 *  2. 在JSX中出现的{} 是存放JS的 但是要求JS代码执行完成有返回结果
 *    (JS表达式)  
 *          -> 不能直接放一个对象类型的值 数组 函数都不行
 *             可以是基本类型的值 (不能是布尔类型的值 
 *              null undefined 也是JSX元素 代表是空)
 *              循环判断的语句都不支持 但是支持三元表达式
 */
// let data = "珠峰培训";
// ReactDOM.render( < div id = "box" > HELLO WORLD！ { data } < /div>,
//     document.querySelector("#root")
//     , () => {
//         let oBox = document.querySelector("#box");
//         console.log(oBox.innerHTML);
//     }

//     );

// let data = [{
//     name: "zhangsan",
//     age: 22
// }, {
//     name: "lisi",
//     age: 23
// }];
// ReactDOM.render( < div id = "box" > HELLO WORLD!$ { data.toString() } < /div>,root);


// JSX 只能出现一个根元素
// let root = document.querySelector("#root");
// ReactDOM.render( < h1 id = "box" > 标题 < /h1>,root);
// let root = document.querySelector("#root");
// let styleObj = { color: 'red' };
// render( < h1 id = "titleBox"
//         className = "title"
//         style = { styleObj } > 珠峰培训 < /h1>,root);