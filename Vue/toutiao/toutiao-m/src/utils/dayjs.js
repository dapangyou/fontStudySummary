/**
 * 初始化dayjs
 */
import Vue from 'vue';
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
// 配置使用加载
dayjs.extend(relativeTime);

// 配置中文语言包
import "dayjs/locale/zh-cn";
dayjs.locale('zh-cn');
// 例如事件日期格式化
// dayjs.format('YYYY-MM-dd');

// console.log(dayjs('2021-01-24').from(dayjs()));
// 把处理全局时间的代码包装给全局过滤器
// 然后就可以在任何组件的模板中使用了
// 所谓的过滤器其实就是可以在模板中调用的一个方法而已
Vue.filter('relativeTime', value => { 
    // console.log(value);
    return dayjs(value).from(dayjs());
});

//  {{xxx |  }}