/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:34
 * @LastEditTime: 2020-12-06 16:30:35
 * @Description: 
 */
import { useState, useEffect, useContext, useRef } from "react";
import Router from 'next/router';
import { Button, message } from "antd";
import { UserContext } from '../../pages/_app';
import { CacheConfig } from '../../utils';

export default (props) => {

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
         message.warning('已经登录啦！');
         Router.push('/writeArticle');
      }
   }

   return (
      <Button
         type="primary"
         onClick={writeArticle}
      >写文章</Button>
   );
}