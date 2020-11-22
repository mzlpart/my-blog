/*
 * @Author: your name
 * @Date: 2020-11-22 10:51:22
 * @LastEditTime: 2020-11-22 11:43:01
 * @LastEditors: Please set LastEditors
 * @Description: 公共布局
 * @FilePath: \my-blog\components\Layout.js
 */

import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default ({ children }) => (
  <div className={styles.container}>
    <Header></Header>
    <div>{children}</div>
    <footer className={styles.footer}>
      <p>页脚</p>
    </footer>
  </div>
);
