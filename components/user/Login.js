/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-18 10:38:27
 * @Description: 登录
 */

import { useState, useEffect, useContext, useRef } from "react";
import { Form, Input, Modal, Button, message, Checkbox } from "antd";

import { UserContext } from '../../pages/_app';

import { postAxios, CacheConfig } from '../../utils';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default (props) => {
  let loginInputRef = useRef();
  let { state, dispatch } = useContext(UserContext);
  let [loading, setLoading] = useState(false);

  function showModal() {
    let { username, isOnline } = state;
    if (!username && !isOnline) {
      dispatch({type: 'login', username: state.username, isOnline: true});
    } else {
      message.warning('已经登录啦！');
    }
  }

  function handleCancel() {
    dispatch({type: 'login', username: state.username, isOnline: false});
  }

  function handleOk() {
    setLoading(true);
  }

  const onFinishFailed = (errorInfo) => {
    setLoading(false);
  };

  function loginAfter({ status, msg, username }) {
    setLoading(false);
    if(status === 200) {
      message.success(msg);
      CacheConfig.setCache('userInfo', {username, isOnline: false});
      dispatch({type: 'login', username, isOnline: false});
    }
    if(status === 500) {
      message.error(msg);
      loginInputRef.current.focus();
    }
  }

  // TODO: with useCallback
  const onFinish = (data) => {
    postAxios({url: "/user/login", data})
      .then(res => {
        loginAfter(res);
      })
      .catch(error => {
        loginAfter(error);
      });
  };
  
  return (
    <>
      <Button onClick={showModal}>
        登录
      </Button>
      <Modal
        visible={state.isOnline}
        centered
        style={{ top: 20 }}
        title="登录啊，寻思啥呢！？"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input ref={loginInputRef}/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {/* 放到最后做 */}
          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              loading={loading}
              onClick={handleOk}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
