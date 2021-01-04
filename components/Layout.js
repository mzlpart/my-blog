/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2021-01-04 14:42:08
 * @LastEditors: mzl
 * @Description: 公共头部提取
 * @FilePath: \my-blog\components\Layout.js
 */
import MyHeader from '../components/Header';

import "../styles/Layout.module.less";

const Layout =  ({ children }) => (
  <div className="container">
    <MyHeader></MyHeader>
    <div className="main-body">{children}</div>
  </div>
);

export default Layout;
