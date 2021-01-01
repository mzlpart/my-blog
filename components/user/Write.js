/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:34
 * @LastEditTime: 2020-12-28 15:36:50
 * @Description: 跳转到写文章页面&&发布文章
 */
import { useState, useEffect, useContext, useRef } from "react";
import IfComp from "if-comp";
import { withRouter } from 'next/router';
import { Button, message } from "antd";
import { UserContext } from '../../pages/_app';
import { CacheConfig } from '../../utils';

const Write = ( { router }) => {
   let { pathname } = router;
   let { state, dispatch } = useContext(UserContext);
   let { isOnline, username, type, content, description } = state;
   // 编辑文章
   const writeArticle = () => {
      let userInfo = CacheConfig.getCache('userInfo');
      // 使用缓存数据
      if (userInfo) {
         username = userInfo.username;
         isOnline = userInfo.isOnline;
      }
      if (!username && !isOnline) {
         dispatch({ type: 'login', username: '', isOnline: true });
      } else {
         router.push('/writeArticle');
      }
   }
   // 发布文章
   const pushArticle = () => {
      let postData = { type, content, description, username };
      console.log('mm-postData', postData)
   }

   return (
      <IfComp
         expression={pathname === '/writeArticle'}
         falseComp={
            <Button
               type="primary"
               onClick={writeArticle}
            >写文章</Button>
         }
         trueComp={
            <Button
            type="primary"
            onClick={pushArticle}
         >发布</Button>
         }
      />
   );
}

export default withRouter(Write);