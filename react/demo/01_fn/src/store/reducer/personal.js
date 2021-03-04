/**
 * 
 * @param {*} state 原始redux管理状态信息(设置初始值)
 * @param {*} action   dispatch派发的时候传递的行为对象
 */
// 把模块中所有的导出内容全部导入并重新命名为type 此后type对象中包含了所有导出的信息
import * as TYPE from '../action-type';
export default function personal(state = {
    baseInfo: {}
}, action) {
    // ....
    // 返回state替换原始信息
    return state;
}