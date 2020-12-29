/**
 * 规定时间内的多方向匀速运动
 * TIME     当前运动时间
 * BEGIN    起始时间
 * TARGET   目标位置
 * CHANGE   总距离
 * DURATION 总时间
 */
let time = 0;
duration = 1000;
let begin = {
    left: 0,
    top: 0
};
let target = {
    left: document.documentElement.clientWidth
}