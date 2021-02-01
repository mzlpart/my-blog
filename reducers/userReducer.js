/*
 * @Author: mzl
 * @Date: 2020-12-28 14:30:29
 * @LastEditTime: 2021-02-01 10:35:28
 * @LastEditors: mzl
 * @Description: 用户相关reducer
 */

const userInitialState = {
    username: "",      // 用户名
    isOnline: false,   // 是否登录
};

const userReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                username: action.username,
                isOnline: action.isOnline
            };
        case "write":
            return {
                ...state,
                type: action.articleType,
                content: action.markdonwValue
            };
        default:
            return state;
    }
}

export {
    userInitialState,
    userReducer
};
