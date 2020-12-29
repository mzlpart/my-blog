/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-29 17:20:16
 * @Description: 头像, 下拉菜单
 */
import { Avatar, Dropdown, Menu, Button, Modal, Input, message } from "antd";
import { useState, useContext } from "react";
import { UserContext } from "../../pages/_app";
import { postAxios } from '../../utils';

export default (props) => {

  const [category, setCategory] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { state } = useContext(UserContext);

  const showCategoryModal = () => {
    // 清空输入
    setCategory('');
    setIsModalVisible(true);
  }

  const saveCategory = () => {
    if(category) {
      setIsModalVisible(false);
      console.log('mzl', category)
    } else {
      message.warning('请输入类别名称！');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>
              <Button onClick={showCategoryModal}>增加文章类别</Button>
            </Menu.Item>
          </Menu>
        }
        placement="bottomCenter" arrow>
        <Avatar
          style={{ cursor: 'pointer' }}
          src="/user_avatar.png" />
      </Dropdown>
      <Modal
        title="添加类别"
        visible={isModalVisible}
        onOk={saveCategory}
        maskClosable={false}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancel}>
        <Input
          value={category}
          onPressEnter={saveCategory}
          onChange={e => setCategory(e.target.value)}
          placeholder="请输入类别名称..."
          bordered={false} />
      </Modal>
    </>
  );
};
