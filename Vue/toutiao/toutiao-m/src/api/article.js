import request from "@/utils/request";
// 文章请求相关模块
export const getArticles = params => {
    return request({
        method: "GET",
        url: `/app/v1_1/articles`,
        params
    });
}