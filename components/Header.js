/*
 * @Author: your name
 * @Date: 2020-11-22 11:40:54
 * @LastEditTime: 2020-12-08 21:58:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\Header.js
 */
import Link from "next/link";
import Login from "./user/Login";
import UserAvatar from "./user/Avatar";
import IfComp from "if-comp";
import { useState, useEffect, useContext, useRef } from "react";
import WriteArticle from "./user/WriteArticle";
import { UserContext } from "../pages/_app";

export default (props) => {
  let { state } = useContext(UserContext);
  let { isLogin, username } = state;
  return (
    <div className="header">
      <Link href="/">
        <p className="link">
          <a>Mzl</a>'s Blog
        </p>
      </Link>
      <div className="login-container">
        <WriteArticle />
        <IfComp
          expression={!isLogin && username}
          falseComp={<Login />}
          trueComp={<UserAvatar />}
        />
      </div>
    </div>
  );
};
