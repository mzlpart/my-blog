/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:34
 * @LastEditTime: 2020-12-06 16:30:35
 * @Description: 跳转到写文章页面&&发布文章
 */
import { useState, useEffect, useContext, useRef } from "react";
import IfComp from "if-comp";
import Router, { withRouter } from 'next/router';
import { Button, message } from "antd";
import { UserContext } from '../../pages/_app';
import { CacheConfig } from '../../utils';

const Write = ({ router }) => {

   let { pathname } = router;
   let { state, dispatch } = useContext(UserContext);

   function writeArticle() {
      let { username, isLogin } = state;
      let userInfo = CacheConfig.getCache('userInfo');
      // 使用缓存数据
      if(userInfo) {
        username = userInfo.username;
        isLogin = userInfo.isLogin;
      }
      if (!username && !isLogin) {
         dispatch({type: 'login', username: '', isLogin: true});
      } else {
         if(pathname !== '/writeArticle') {
            Router.push('/writeArticle');
         } else {
            message.success('发布');
         }
      }
   }

   return (
      <Button
         type="primary"
         onClick={writeArticle}
      >{pathname === '/writeArticle' ? '发布' : '写文章'}</Button>
   );
}

export default withRouter(Write);