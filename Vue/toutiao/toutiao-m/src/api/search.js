/**
 * 获取搜索联想建议
 */
import request from "@/utils/request";
export const getSearchSuggestions = q => {
    return request({
        method: "GET",
        url: "/app/v1_0/suggestion",
        params: {
            q
        }
    });
}

// 获取搜索结果
export const getSearchResults = params => {
    return request({
        method: "GET",
        url: "/app/v1_0/search",
        params
    });
}

/**
 *  获取用户搜索历史
 */
export const getUserHistoryList = () => {
    return request({
        method: "GET",
        url: "/app/v1_0/search/histories",
    });
}