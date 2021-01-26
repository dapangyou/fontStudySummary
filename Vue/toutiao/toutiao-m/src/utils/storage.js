// 本地存储模块
export const getItem = name => {
    const data = window.localStorage.getItem(name);
    try {
        // 为什么把data放在try 中 如果data不是JSON格式对象  就不能转 会报错
        return JSON.parse(data);
    } catch (error) {
        return data;
    }
}

export const setItem = (name, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(name, value);
}

export const removeItem = (name) => {
    window.localStorage.removeItem(name);
}