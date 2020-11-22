const { defaultHead } = require("next/head");

/*
 * @Author: your name
 * @Date: 2020-11-22 11:40:54
 * @LastEditTime: 2020-11-22 11:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\Header.js
 */
import Link from "next/link";
import { Button } from "antd";

export default () => (
  <div className="header">
    <Link href="/">
      <a className="link">首页</a>
    </Link>
    <div className="login-container">
      <Button>登录</Button>
      <Button>注册</Button>
    </div>
  </div>
);
