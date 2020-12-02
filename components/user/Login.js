/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-02 23:34:46
 * @Description:
 */
import { Form, Input, Modal, Button, Checkbox } from "antd";
import { useState, useEffect } from "react";

import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default (props) => {
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  // let [userName, setUserName] = useState('');
  // let [password, setPassword] = useState('');

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setLoading(true);
    // TODO: 用户登录接口
  }

  function handleCancel() {
    setVisible(false);
  }

  const onFinish = (data) => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/user/save",
      data,
    })
      .then(res => {
        console.log('mm-res', res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
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
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            // label="Username"
            // value={userName}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            // label="Password"
            // value={password}
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
