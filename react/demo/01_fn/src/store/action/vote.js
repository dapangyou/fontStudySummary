/**
 * 每个版块单独的action-creator
 *          就是把dispatch派发时需要传递的action对象进一步统一封装处理
 *          (react-redux中我们会进一步体验到它的好处)
 */
import * as TYPE from '../action-type';
let vote = {
    support() {
        // dispatch派发的时候需要传递啥就返回啥
        return {
            type: TYPE.VOTE_SUPPORT
        };
    },
    against() {
        return {
            type: TYPE.VOTE_AGAINST
        }
    }
};

export default vote;