/*
 * @Author: mzl
 * @Date: 2020-12-28 14:30:29
 * @LastEditTime: 2020-12-28 15:39:55
 * @LastEditors: mzl
 * @Description: 用户相关reducer
 */

const userInitialState = {
    username: "",      // 用户名
    isOnline: false,   // 是否登录
};

const userReducer = (state = initialState, action) => {
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
                description: action.description,
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
