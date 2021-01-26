import axios from 'axios';

import store from "@/store/"
const request = axios.create({
    // baseURL: "/app/"
});

// 请求拦截器
request.interceptors.request.use(config => {
    const { user } = store.state
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    // 处理完成之后一定要把config返回 否则请求就发不出去了
    return config
}, error => {
    return Promise.reject(error)
});

export default request;