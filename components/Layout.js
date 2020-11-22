/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2020-11-22 11:19:04
 * @LastEditors: Please set LastEditors
 * @Description: 公共布局
 * @FilePath: \my-blog\components\Layout.js
 */

import Link from "next/link";

export default ({ children }) => (
  <>
    <div className="container">
      <div className="header">
        <Link href="/">
          <a className="link">首页</a>
        </Link>
        <div className="login-container">
          <div className="login">登录</div>
          <div className="register">注册</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
    <style jsx>{`
      .header {
        display: flex;
        width: 100%;
        background: #343434;
        padding: 10px 20px;
        height: 60px;
      }
    `}</style>
  </>
);
