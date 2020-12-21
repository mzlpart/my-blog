/*
 * @Author: mzl
 * @Date: 2020-12-07 08:57:34
 * @LastEditTime: 2020-12-21 13:54:43
 * @Description: https://github.com/kkfor/for-editor
 */
import { useState, useEffect, useContext, useRef } from "react";
import { Select, message } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import MarkdownIt from 'markdown-it';
import { CacheConfig } from '../utils';
import "../styles/Editorstyle.module.less";

const { Option } = Select;
const md = new MarkdownIt();
const Editor = dynamic(import("for-editor"), { ssr: false });

export default (props) => {

  const [articleType, setArticleType] = useState("react"); // 文章类型
  const [markdonwValue, setMarkdonwValue] = useState("");  // markdown文本

  // 处理未保存文章缓存
  useEffect(() => {
    let localType = CacheConfig.getCache('articleType') || 'react';
    let localMarkdonw = CacheConfig.getCache('markdonwValue') || '';
    setArticleType(localType);
    setMarkdonwValue(localMarkdonw);
  }, []);

  // 监听路由变化, 自动保存当前编辑
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      setCacheArticle();
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [articleType, markdonwValue]) // 其中任意一个变化，都重新绑定一次，以获取最新变量

  function save(params) {
    // let result = md.render(params);
    setCacheArticle();
    message.success('缓存成功！');
  }

  // 设置文章缓存
  function setCacheArticle() {
    CacheConfig.setCache('articleType', articleType);
    CacheConfig.setCache('markdonwValue', markdonwValue);
  }

  // 文章类型
  function typeChange(value) {
    setArticleType(value);
  }
  
  return (
    <div className="editor-container">
      <div className="article-type">
        <Select
          bordered={false}
          value={articleType}
          style={{ width: 120 }}
          onChange={typeChange}
        >
          <Option value="react">React</Option>
          <Option value="js">Js</Option>
          <Option value="node">Node</Option>
          <Option value="other">Other</Option>
        </Select>
      </div>
      <Editor
        height="800px"
        preview={true}
        subfield={true}
        value={markdonwValue}
        placeholder="可以预留一个模板位置在这里"
        onSave={(params) => save(params)}
        onChange={(value) => setMarkdonwValue(value)}
      />
    </div>
  );
};
