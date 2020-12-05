/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-06 03:17:45
 * @Description:
 */

import { useState, useEffect, useContext, useRef } from "react";
import { Form, Input, Modal, Button, message, Checkbox } from "antd";

import { postAxios } from '../../utils';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default (props) => {
  // let value = useContext(MyContext);
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);

  let loginInputRef = useRef();

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setLoading(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  function loginAfter({ status, msg }) {
    setLoading(false);
    if(status === 200) {
      setVisible(false);
      message.success(msg)
    }
    if(status === 500) {
      message.error(msg);
      loginInputRef.current.focus();
    }
  }

  const onFinish = (data) => {
    postAxios({url: "/user/login", data})
      .then(res => {
        loginAfter(res);
      })
      .catch(error => {
        loginAfter(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button onClick={showModal}>
        登录
      </Button>
      <Modal
        visible={visible}
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
