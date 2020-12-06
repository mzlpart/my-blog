/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:34
 * @LastEditTime: 2020-12-06 16:30:35
 * @Description: 
 */
import { Button, message } from "antd";
import { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from '../../pages/_app';

export default (props) => {

   let { state, dispatch } = useContext(UserContext);

   function writeArticle() {
      let { username, isLogin } = state;
      if (!username && !isLogin) {
         dispatch({type: 'login', username: '', isLogin: true});
      } else {
         message.warning('已经登录啦！');
      }
   }

   return (
      <Button
         type="primary"
         onClick={writeArticle}
      >写文章</Button>
   );
}