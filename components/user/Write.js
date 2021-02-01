/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:34
 * @LastEditTime: 2021-02-01 14:08:33
 * @Description: 跳转到写文章页面&&发布文章
 */
import { useState, useEffect, useContext, useRef, Fragment } from "react";
import IfComp from "if-comp";
import { withRouter } from 'next/router';
import { Button, message, Modal, Input } from "antd";
import { UserContext } from '../../pages/_app';
import { CacheConfig } from '../../utils';

const { TextArea } = Input;

const Write = ({ router }) => {
   let { pathname } = router;
   const [descrition, setDescrition] = useState(''); // 文章简介
   const [modal, setModal] = useState(false);
   let { state, dispatch } = useContext(UserContext);
   let { userReducer, articleReducer } = state;
   let { isOnline, username, type, content } = userReducer;
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

   const showDescModal = () => {
      setModal(true);
   }

   // 发布文章
   function pushArticle() {
      setModal(false);
      let postData = { type, content, username, descrition };
      postAxios({url: "/article/add", postData})
      .then(res => {
         
      })
      .catch(error => {

      });
   }

   function handleCancel() {
      setModal(false);
   }

   return (
      <Fragment>
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
                  onClick={showDescModal}
               >发布</Button>
            }
         />
         <Modal
            visible={modal}
            centered
            style={{ top: 20 }}
            title="请写一下文章详情呀"
            onCancel={handleCancel}
            onOk={pushArticle}
            maskClosable={false}
            cancelText="取消"
            okText="确认"
         >
            <TextArea
               value={descrition}
               showCount
               onChange={e => setDescrition(e.target.value)}
               rows={4} />
         </Modal>
      </Fragment>
   );
}

export default withRouter(Write);