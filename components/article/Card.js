/*
 * @Author: mzl
 * @Date: 2020-11-23 20:21:23
 * @LastEditTime: 2021-02-02 10:52:33
 * @LastEditors: mzl
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

const ArticleCard = ({ type, time, title, description }) => (
  <IfComp
    expression={type === 'End'}
    trueComp={
      <div className="article-card article-end">
        <div className="article-card-time">
          <p className="article-card-time-end">End</p>
        </div>
        <Card
          bodyStyle={{display: 'none'}}
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
          <p>{timeFormat(time)}</p>
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
              <div className="article-card-container-title">{title}</div>
              {/* <div className="article-card-container-count">
                <EyeOutlined className="card-count-icon" />
                <Badge count={4} className="card-show-count" />
              </div> */}
              <div className="article-content-popicon"></div>
            </div>
          }
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            // title={title}
            description={description}
          />
        </Card>
      </div>
    }
  />
);
export default ArticleCard;