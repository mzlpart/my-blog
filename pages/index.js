/*
 * @Author: your name
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2021-02-01 09:57:50
 * @LastEditors: mzl
 * @Description: In User Settings Edit
 * @FilePath: \my-blog\pages\index.js
 */
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import dynamic from "next/dynamic";
import { useGetCategories } from '../utils/common.effects';

// 改成动态获取，解决直接导入带来的样式未生效问题
const ArticleCard = dynamic(import("../components/article/Card"), { ssr: false });
const { Content, Sider } = Layout;

export default function Home() {

  let categories = useGetCategories(); // 获取文章类别

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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['Js']}>
          {categories && categories.map((item) => (
            <Menu.Item key={item.name} icon={<UserOutlined />}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Content style={{ marginTop: 10, marginLeft: 240, marginRight: 10, overflow: 'initial' }}>
        <Row>
          <Col span={18}>
            <ArticleCard
              title=""
              time={1712319824} />
            <ArticleCard
              title=""
              time={1712319824} />
            <ArticleCard
              title=""
              time={1712319824} />
            <ArticleCard
              title=""
              time={1712319824} />
            <ArticleCard type="End" />
          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
    </Layout>
  )
}