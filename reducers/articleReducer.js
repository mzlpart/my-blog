/*
 * @Author: mzl
 * @Date: 2020-12-28 14:30:29
 * @LastEditTime: 2020-12-28 15:39:55
 * @LastEditors: mzl
 * @Description: 文章相关reducer
 */

const articleInitialState = {
    isFetch: false, // 是否拉取类别数据
};

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CategoryAdd":
            return {
                ...state,
                isFetch: action.isFetch
            };
        default:
            return state;
    }
}

export {
    articleInitialState,
    articleReducer
};