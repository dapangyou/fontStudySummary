import axios from 'axios';
export default function ajax(url = '', params = {}, type = 'GET') {
    // 1.定义promise对象
    let promise;
    return new Promise((resolve, reject) => {
        // 2.判断请求方式
        if ('GET' === type) {
            // 2.1拼接请求的字符串
            let paramsStr = "";
            Object.keys(paramsStr).forEach(key => {
                paramsStr += key + '=' + paramsStr[key] + "&";
            });
            // 2.2 过滤最后一个&
            if (paramsStr != '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            // 2.3完整路径
            url += '?' + paramsStr;
            // 2.4发送get请求
            promise = axios.get(url);
        } else if ('POST' === type) {
            promise.axios(url, params);
        }
        // 3.返回请求结果
        promise.then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    });
};