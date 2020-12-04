const { defaultHead } = require("next/head");

/*
 * @Author: your name
 * @Date: 2020-11-22 11:40:54
 * @LastEditTime: 2020-11-24 23:40:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\Header.js
 */
import Link from "next/link";
import Login from './user/Login';
import WriteArticle from './user/WriteArticle';

export default () => (
  <div className="header">
    <Link href="/">
      <p className="link">
          <a>Mzl</a>'s Blog</p>
    </Link>
    <div className="login-container">
        <WriteArticle/>
        <Login/>
    </div>
  </div>
);
