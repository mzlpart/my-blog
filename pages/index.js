/*
 * @Author: your name
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2020-11-24 23:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-blog\pages\index.js
 */
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import ArticleCard from '../components/ArticleCard';

const { Content, Sider } = Layout;

export default function Home() {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
        </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
        </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
        </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
        </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
        </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
        </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
        </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
        </Menu.Item>
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