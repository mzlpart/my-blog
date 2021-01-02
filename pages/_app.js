/*
 * @Author: mzl
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2020-12-28 14:31:55
 * @LastEditors: mzl
 * @Description: 处理公共逻辑：布局、全局状态、国际化等
 * @FilePath: \my-blog\pages\_app.js
 */
import { createContext, useReducer } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import moment from "moment";
import { message } from "antd";
import { reducers, initialState } from '../reducers';

import "antd/dist/antd.css"; // 先不走按需引入(后期解决)
import "../styles/globals.css";

moment.locale("zh-cn");

// 统一消息提示配置
message.config({
  top: 200,
  duration: 1,
});

/**
 * @param type      ---    文章类型
 * @param content   ---    文章内容
 */

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {

  // reducer抽出为单独文件，放在这里不合理
  // 第一点: 页面入口，怎么能放reducer这种逻辑代码？
  // 第二点: 子页dispatch 会导致执行两次reducer？原因，不清楚，大概是重新生成了Provider, 导致内部重新生成了一次dispatch
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "login":
  //       return {
  //         username: action.username,
  //         isOnline: action.isOnline
  //       };
  //     case "write":
  //       console.log('mm-test', 222)
  //       return {
  //         ...state,
  //         type: action.articleType,
  //         description: action.description,
  //         content: action.markdonwValue
  //       }
  //     case "pushArticle":
  //       // TODO: 发布文章
  //       ;
  //     default:
  //       throw new Error();
  //   }
  // }
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <>
      <Head>
        <title>成长点滴</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserContext.Provider value={{ state, dispatch }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
