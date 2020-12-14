/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2020-11-22 12:18:51
 * @LastEditors: Please set LastEditors
 * @Description: 公共头部提取
 * @FilePath: \my-blog\components\Layout.js
 */
import dynamic from 'next/dynamic'
import "../styles/Layout.module.less";
const Header = dynamic(import("../components/Header"),
  {
    ssr: false   // 禁止使用 SSR
  }
)

export default ({ children }) => (
  <div className="container">
    <Header></Header>
    <div className="main-body">{children}</div>
  </div>
);
