/*
 * @Author: your name
 * @Date: 2020-11-22 11:40:54
 * @LastEditTime: 2020-12-18 10:23:04
 * @LastEditors: your name
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
  let { username, isLogin } = state;
  // 使用缓存数据
  useEffect(() => {
    let userInfo = CacheConfig.getCache('userInfo');
    if(userInfo) {
      dispatch({type: 'login', username: userInfo.username, isLogin: userInfo.isLogin});
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
          expression={!isLogin && username}
          falseComp={<Login />}
          trueComp={<UserAvatar />}
        />
      </div>
    </div>
  );
};
