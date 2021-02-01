/*
 * @Author: mzl
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2021-02-01 10:31:25
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
