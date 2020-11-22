import { Popover } from 'antd';
import '../../styles/Card.module.css';
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
        <Popover
            placement="rightTop"
            title={
                <div className="article-cardT-title">
                    <div>文章标题</div>
                    <div>观看数</div>
                </div>
            }
            visible={true}
            content={
                <div style={{ width: 600, height: 160 }}>
                    333
            </div>
            }
        />
    </div>
)