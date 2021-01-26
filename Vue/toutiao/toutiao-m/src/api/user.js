// 用户相关模块
import request from "@/utils/request";
// 单独加载store
// import store from "@/store";
// 注册/登录
export const login = data => {
        return request({
            method: "POST",
            url: "/app/v1_0/authorizations",
            data
        });
    }
    // 发送短信验证码
export const sendMsg = mobile => {
    return request({
        method: "GET",
        url: `app/v1_0/sms/codes/${mobile}`,
    });
}

// 获取用户信息
export const getCurrentUser = () => {
    return request({
        method: "GET",
        url: `/app/v1_0/user`
    });
}

// 获取用户频道列表
export const getChannels = () => {
    return request({
        method: "GET",
        url: `/app/v1_0/user/channels`,

    });
}