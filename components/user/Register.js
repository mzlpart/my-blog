/*
 * @Author: mzl
 * @Date: 2020-11-24 23:23:34
 * @LastEditTime: 2020-11-24 23:39:48
 * @Description: 
 */
import { Button, message } from "antd";

export default (props) => {

   function success() {
      message.success('wocao!!', 1);
   }

   return (
      <Button onClick={success}>注册</Button>
   );
}