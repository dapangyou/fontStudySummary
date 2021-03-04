/**
 * 函数式声明组件
 * 函数返回结果一个新的JSX 也是当前组件的JSX结构
 */
import React from 'react';
// 每一个组件中都要导入React 因为需要基于他的create element把jsx渲染
export default function Dialog(props) {
    // console.log(props);
    let { con, lx = 0 } = props,
    title = lx === 0 ? '系统提示' : '系统警告';
        <
        h2 > { title } < /h2> <
    div > { con } < /div> < /
    section > ;
};
