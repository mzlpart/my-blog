/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-11-25 00:37:37
 * @Description:
 */
import { Form, Input, Modal, Button, Checkbox } from "antd";
import { useState, useEffect } from "react";

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

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 3000);
  }

  function handleCancel() {
    setVisible(false);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
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
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

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
