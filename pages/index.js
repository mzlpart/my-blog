/*
 * @Author: your name
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2021-02-02 14:04:50
 * @LastEditors: mzl
 * @Description: In User Settings Edit
 * @FilePath: \my-blog\pages\index.js
 */
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd';
import { useEffect, useState } from "react";
import {
  UserOutlined,
} from '@ant-design/icons';
import dynamic from "next/dynamic";
import { getArticle } from './../utils';
import { useGetCategories } from '../utils/common.effects';

// 改成动态获取，解决直接导入带来的样式未生效问题
const ArticleCard = dynamic(import("../components/article/Card"), { ssr: false });
const { Content, Sider } = Layout;

export default function Home() {

  let categories = useGetCategories(); // 获取文章类别
  const [articles, setArticles] = useState([]);

  let reactArticles = [];
  let vueArticles = [];

  useEffect(async () => {
    let data = await getArticle();
    reactArticles = data.list.filter((item) => item.type === 'React');
    vueArticles = data.list.filter((item) => item.type === 'Vue');
    setArticles(reactArticles); // 默认React
  }, []);

  const handleMenu = (item) => {
    switch (item.name) {
      case 'React':
        setArticles(reactArticles);
        break;
      case 'Vue':
        setArticles(vueArticles);
        break;
      default:
        break;
    }
  }

  return (
    <Layout style={{ marginTop: 60, width: '100%', background: 'rgba(0,0,0,0)' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['React']}>
          {categories && categories.map((item) => (
            <Menu.Item
              onClick={() => handleMenu(item)}
              key={item.name}
              icon={<UserOutlined />}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Content style={{ marginTop: 10, marginLeft: 240, marginRight: 10, overflow: 'initial' }}>
        <Row>
          <Col span={18}>
            {articles.map((item, index) => (
              <ArticleCard
                key={item._id}
                type={item.type}
                title={item.title}
                description={item.description}
                time={item.time} />
            ))}
            <ArticleCard type="End" />
          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
    </Layout>
  )
}