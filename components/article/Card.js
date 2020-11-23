/*
 * @Author: mzl
 * @Date: 2020-11-23 20:21:23
 * @LastEditTime: 2020-11-24 00:25:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\components\article\Card.js
 */
import IfComp from "if-comp";
import { Card, Avatar, Badge } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "../../styles/Card.module.less";

import { 
  timeFormat,
} from '../../utils';

const { Meta } = Card;
const liList = [1, 2, 3, 4, 5, 6, 7];

export default ({ type, time }) => (
  <IfComp
    expression={!!type}
    trueComp={
      <div className="article-card article-end">
        <div className="article-card-time">
          <p className="article-card-time-end">End</p>
        </div>
        <Card
          bodyStyle={{display: 'none'}}
          hoverable
          className="article-card-main article-card-end"
          cover={
            <div className="article-card-container">
              <div className="article-card-container-title">
                客官您好！打尖还是住店?
              </div>
              <div className="article-content-popicon"></div>
            </div>
          }
        />
      </div>
    }
    falseComp={
      <div className="article-card">
        <div className="article-card-time">
          <p>{timeFormat(new Date().getTime())}</p>
          <ul>
            {liList.map((item, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
        <Card
          hoverable
          className="article-card-main"
          cover={
            <div className="article-card-container">
              <div className="article-card-container-title">文章标题</div>
              <div className="article-card-container-count">
                <EyeOutlined className="card-count-icon" />
                <Badge count={4} className="card-show-count" />
              </div>
              <div className="article-content-popicon"></div>
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
    }
  />
);
