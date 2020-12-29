/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-29 09:51:21
 * @Description: 头像
 */
import { Avatar, Dropdown, Menu, Button, Modal } from "antd";
import { useState, useContext } from "react";
import { UserContext } from "../../pages/_app";
import { postAxios } from '../../utils';

export default (props) => {
  
  const [category, setCategory] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { state } = useContext(UserContext);

  const addCategory = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={addCategory}>增加文章类别</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <Avatar
          style={{ cursor: 'pointer' }}
          src="/user_avatar.png" />
      </Dropdown>
      <Modal 
        title="添加类别" 
        visible={isModalVisible} 
        onOk={handleOk} 
        maskClosable={false}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    </>
  );
};
