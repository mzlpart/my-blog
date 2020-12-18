/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2020-12-18 10:22:56
 * @LastEditors: your name
 * @Description: 公共头部提取
 * @FilePath: \my-blog\components\Layout.js
 */
import Header from '../components/Header';

import "../styles/Layout.module.less";

export default ({ children }) => (
  <div className="container">
    <Header></Header>
    <div className="main-body">{children}</div>
  </div>
);
