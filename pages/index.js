/*
 * @Author: your name
 * @Date: 2020-11-22 01:48:02
 * @LastEditTime: 2020-11-24 23:30:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-blog\pages\index.js
 */
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import ArticleCard from '../components/article/Card';
import { useGetCategories } from '../utils/common.effects';

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