/**
 * 该文件专门用于暴露一个store对象 整个应用只有一个store
 */
// 引入createStore 专门用于引入redux中最为核心的store
import { createStore } from 'redux'
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer)
