/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-28 16:25:56
 * @Description: 头像
 */
import { Avatar, Dropdown, Menu, Button } from "antd";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";

export default (props) => {
  let { state } = useContext(UserContext);

  const menu = (
    <Menu>
      <Menu.Item>
        <Button>增加文章类别</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Avatar
        style={{ cursor: 'pointer' }}
        src="/user_avatar.png" />
    </Dropdown>
  );
};
