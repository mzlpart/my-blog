/*
 * @Author: mzl
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2020-11-30 22:47:08
 * @LastEditors: Please set LastEditors
 * @Description: 处理公共逻辑：布局、全局状态、国际化等
 * @FilePath: \my-blog\pages\_app.js
 */

import Head from 'next/head';
import Layout from '../components/Layout';
import moment from 'moment';
import { message } from 'antd';

import 'antd/dist/antd.css'; // 先不走按需引入(后期解决)
import '../styles/globals.css';

moment.locale('zh-cn');

// 统一消息提示配置
message.config({
  top: 200,
  duration: 1,
  // maxCount: 3,
  // rtl: true,
  // prefixCls: 'my-message',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>成长点滴</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
