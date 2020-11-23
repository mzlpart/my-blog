import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import IfComp from 'if-comp';
import '../../styles/Card.module.less';
/**
 * <IfComp 
      expression={true}
      trueComp={<h3>render true component</h3>}
      falseComp={<h3>render false component</h3>}
    />
 */
const { Meta } = Card;

export default () => (
    <div className="article-card">
        <div className="article-card-time">
            <p>05.17<br />2020</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <Card
            style={{ width: '100%' }}
            cover={
                <div>卡片封面</div>
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    </div>
)