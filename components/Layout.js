/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2020-11-22 12:18:51
 * @LastEditors: Please set LastEditors
 * @Description: 公共头部提取
 * @FilePath: \my-blog\components\Layout.js
 */

import "../styles/Layout.module.less";
import Header from "../components/Header";

export default ({ children }) => (
  <div className="container">
    <Header></Header>
    <div className="main-body">{children}</div>
  </div>
);
