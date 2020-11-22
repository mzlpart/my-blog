const { defaultHead } = require("next/head");

/*
 * @Author: your name
 * @Date: 2020-11-22 11:40:54
 * @LastEditTime: 2020-11-22 12:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\Header.js
 */
import { userState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "antd";

export default () => (
  <div className="header">
    <Link href="/">
      <p className="link">
          <a>Mzl</a>'s Blog</p>
    </Link>
    <div className="login-container">
      <Button>登录</Button>
      <Button>注册</Button>
    </div>
  </div>
);
