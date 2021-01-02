/*
 * @Author: mzl
 * @Date: 2020-12-07 08:57:34
 * @LastEditTime: 2020-12-28 15:40:07
 * @Description: https://github.com/kkfor/for-editor
 */
import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { Select, message } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import MarkdownIt from 'markdown-it';
import { CacheConfig, getAxios } from '../utils';
import { useGetCategories } from '../utils/common.effects';
import { UserContext } from '../pages/_app';

const { Option } = Select;
const md = new MarkdownIt();
const Editor = dynamic(import("for-editor"), { ssr: false });

const WirteActicle = (props) => {

  let { state, dispatch } = useContext(UserContext);
  let categories = useGetCategories(); // 文章类别列表
  let [articleType, setArticleType] = useState("React"); // 文章类型
  let [markdonwValue, setMarkdonwValue] = useState("");  // markdown文本

  // 处理未保存文章缓存
  useEffect(() => {
    let localType = CacheConfig.getCache('articleType') || 'React';
    let localMarkdonw = CacheConfig.getCache('markdonwValue') || '';
    setArticleType(localType);
    setMarkdonwValue(localMarkdonw);
  }, []);

  const router = useRouter();
  useEffect(() => {
    // 文章信息、类型变化
    dispatch({ type: 'write', markdonwValue, articleType });
    // 监听路由变化, 自动保存当前编辑
    const handleRouteChange = (url) => {
      setCacheArticle();
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [articleType, markdonwValue]) // 其中任意一个变化，都重新绑定一次，以获取最新变量

  const save = (params) => {
    setCacheArticle();
    message.success('本地保存成功！');
  }

  // 设置文章缓存
  function setCacheArticle() {
    CacheConfig.setCache('articleType', articleType);
    CacheConfig.setCache('markdonwValue', markdonwValue);
  }

  // 变更文章类型
  const typeChange = (value) => {
    setArticleType(value);
  }

  // 文章内容变更
  const articleChange = (value) => {
    setMarkdonwValue(value);
  }

  return (
    <div className="editor-container" style={{ position: 'relative', marginTop: 60 }}>
      <div className="article-type" style={{ position: 'absolute', top: 6, left: 390 }}>
        <Select
          bordered={false}
          value={articleType}
          style={{ width: 120 }}
          onChange={typeChange}
        >
          {categories && categories.map((item) => (
            <Option value={item.name} key={item._id}>{item.name}</Option>
          ))}
        </Select>
      </div>
      <Editor
        height="800px"
        preview={true}
        subfield={true}
        value={markdonwValue}
        placeholder="可以预留一个模板位置在这里"
        onSave={(value) => save(value)}
        onChange={(value) => articleChange(value)}
      />
    </div>
  );
};

export default WirteActicle;