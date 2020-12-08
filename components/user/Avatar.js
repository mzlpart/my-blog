/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:29
 * @LastEditTime: 2020-12-08 22:24:07
 * @Description: 头像
 */
import { Avatar, Tooltip } from "antd";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";

export default (props) => {
  let { state } = useContext(UserContext);
  return (
    <Tooltip title={state.username} placement="top">
      <Avatar
        style={{ cursor: 'pointer' }}
        src="/static/user_avatar.png"/>
    </Tooltip>
  );
};
