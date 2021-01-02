/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-30 13:40:31
 * @Description: 头像, 下拉菜单
 */
import { Avatar, Dropdown, Menu, Button, Modal, Input, message } from "antd";
import { useState, useContext } from "react";
import { UserContext } from "../../pages/_app";
import { postAxios } from '../../utils';

const MyAvatar = (props) => {

  const [category, setCategory] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { state, dispatch } = useContext(UserContext);

  const showCategoryModal = () => {
    setIsModalVisible(true);
  }

  const hiddenCategoryModal = () => {
    setCategory(''); // 清空输入
    setIsModalVisible(false);
  }

  const saveCategory = () => {
    if(category) {
      hiddenCategoryModal();
      postAxios({url: '/category/add', data: { name: category }})
      .then(res => {
        let { msg, status } = res;
        if(status === 200) {
          dispatch({type: 'CategoryAdd', isFetch: !state.articleReducer.isFetch});
          message.success(msg);
        }
      })
      .catch(error => {
        let { msg } = error;
        message.error(msg);
      });
    } else {
      message.warning('请输入类别名称！');
    }
  };

  const handleCancel = () => {
    hiddenCategoryModal();
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

export default MyAvatar;