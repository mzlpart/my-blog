/*
 * @Author: mzl
 * @Date: 2020-12-28 14:30:29
 * @LastEditTime: 2020-12-28 15:39:55
 * @LastEditors: mzl
 * @Description: 用户相关reducer
 */

const userReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {
                username: action.username,
                isLogin: action.isLogin
            };
        case "write":
            return {
                ...state,
                type: action.articleType,
                description: action.description,
                content: action.markdonwValue
            };
        default:
            throw new Error();
    }
}

export default userReducer;
