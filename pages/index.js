/*
 * @Author: your name
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2021-02-03 14:06:18
 * @LastEditors: mzl
 * @Description: In User Settings Edit
 * @FilePath: \my-blog\pages\index.js
 */
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd';
import { useEffect, useState, useRef } from "react";
import {
  UserOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import dynamic from "next/dynamic";
import { getArticle, CacheConfig } from './../utils';
import { useGetCategories } from '../utils/common.effects';

// 改成动态获取，解决直接导入带来的样式未生效问题
const ArticleCard = dynamic(import("../components/article/Card"), { ssr: false });
const { Content, Sider } = Layout;
const { getCache, setCache } = CacheConfig;

function Home({ router }) {

  let categories = useGetCategories(); // 获取文章类别
  const articlesRef = useRef(); // 文章列表数据
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    let data = await getArticle();
    articlesRef.current = data.list;
    let rArticles = data.list.filter((item) => item.type === 'React');
    setArticles(rArticles); // 默认react
  }, []);

  const handleMenu = (item) => {
    switch (item.name) {
      case 'React':
        let reactArticles = articlesRef.current.filter((item) => item.type === 'React');
        setArticles(reactArticles);
        break;
      case 'Vue':
        let vueArticles = articlesRef.current.filter((item) => item.type === 'Vue');
        setArticles(vueArticles);
        break;
      default:
        break;
    }
  }

  const toDetails = (item) => {
    setCache('articleContent', item);
    router.push('/article');
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
                onClick={() => toDetails(item)}
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

export default withRouter(Home);