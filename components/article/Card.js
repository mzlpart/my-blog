/*
 * @Author: mzl
 * @Date: 2020-11-23 20:21:23
 * @LastEditTime: 2020-11-23 22:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\article\Card.js
 */
import { Card, Avatar, Badge } from "antd";
import {
  EyeOutlined,
} from "@ant-design/icons";
import IfComp from "if-comp";
import "../../styles/Card.module.less";
/**
 * <IfComp
      expression={true}
      trueComp={<h3>render true component</h3>}
      falseComp={<h3>render false component</h3>}
    />
 */
const { Meta } = Card;
const liList = [1,2,3,4,5,6,7];

export default ({ type, time }) => (
  <div className="article-card">
    <div className="article-card-time">
      <p>{time}</p>
      <ul>{liList.map((item) => (<li></li>))}</ul>
    </div>
    <Card
      hoverable
      className="article-card-main"
      cover={
        <div className="article-card-container">
          <div className="article-card-container-title">文章标题</div>
          <div className="article-card-container-count">
            <EyeOutlined className="card-count-icon"/>
            <Badge count={4} className="card-show-count" />
          </div>
        </div>
      }
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="是打发斯蒂芬时代峰峻胜多负少的基督教的基督教的基督教的是打发斯蒂芬时代峰峻胜多负少的基督教的基督教的基督教的是打发斯蒂芬时代峰峻胜多负少的基督教的基督教的基督教的是打发斯蒂芬时代峰峻胜多负少的基督教的基督教的基督教的"
      />
    </Card>
  </div>
);
