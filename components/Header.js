/*
 * @Author: your name
 * @Date: 2020-11-22 11:40:54
 * @LastEditTime: 2020-12-28 15:35:32
 * @LastEditors: mzl
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\Header.js
 */
import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Login from "./user/Login";
import UserAvatar from "./user/Avatar";
import IfComp from "if-comp";
import Write from "./user/Write";
import { UserContext } from "../pages/_app";
import { CacheConfig } from '../utils';

export default (props) => {
  let { state, dispatch } = useContext(UserContext);
  let { username, isOnline } = state.userReducer;
  // 使用缓存数据
  useEffect(() => {
    let userInfo = CacheConfig.getCache('userInfo');
    if(userInfo) {
      dispatch({type: 'login', username: userInfo.username, isOnline: userInfo.isOnline});
    }
  }, []);

  return (
    <div className="header">
      <Link href="/">
        <p className="link">
          <a>Mzl</a>'s Blog
        </p>
      </Link>
      <div className="login-container">
        <Write />
        <IfComp
          expression={!isOnline && username}
          falseComp={<Login />}
          trueComp={<UserAvatar />}
        />
      </div>
    </div>
  );
};
