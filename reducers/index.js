/*
 * @Author: mzl
 * @Date: 2020-12-28 14:30:35
 * @LastEditTime: 2020-12-28 14:32:38
 * @LastEditors: mzl
 * @Description: reducer汇总
 */

import { combineReducers } from './../utils';
import { userInitialState, userReducer } from './userReducer';
import { articleInitialState, articleReducer } from "./articleReducer";

let reducers = combineReducers({ userReducer, articleReducer });
let initialState = { userReducer: userInitialState, articleReducer: articleInitialState }

export {
    reducers,
    initialState
};