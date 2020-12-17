/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2020-12-17 16:37:08
 * @LastEditors: your name
 * @Description: 公共头部提取
 * @FilePath: \my-blog\components\Layout.js
 */
import dynamic from 'next/dynamic'
import "../styles/Layout.module.less";

// 这个有更好的方式解决：不导入这个，针对Login和Avatar进行动态导入，这样，页面显示更友好
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
