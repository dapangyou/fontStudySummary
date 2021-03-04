/**
 * 把每一个模块单独设定的reducer函数 最后合并成总的reducer
 * 
 *  为了保证合并reducer过程中 每个模块管理的状态信息不会相互冲突
 *  redux在合并的时候把容器中的状态分开进行管理
 *  (以合并reducer的时候设置的属性名作为状态划分的属性名,把各个板块管理的状态放到自己的属性下即可)
 * state = {
 *      vote: {
 *         n: 0,
 *         m: 0
 *      },
 *      personal: {
 *          baseInfo: {}
 *      }
 * }
 */

import { combineReducers } from 'redux'
import vote from './vote';
import personal from './personal';

let reducer = combineReducers({
    vote,
    personal
});

export default reducer;