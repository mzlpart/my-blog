/*
 * @Author: mzl
 * @Date: 2020-12-17 14:15:23
 * @LastEditTime: 2021-02-03 14:26:02
 * @LastEditors: mzl
 * @Description: 文章详情页面
 */

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { withRouter } from 'next/router';
import { getArticle, CacheConfig } from './../utils';
import '../styles/Article.module.less';

const Editor = dynamic(import("for-editor"), { ssr: false });
const { getCache, setCache } = CacheConfig;

const article = ({ router }) => {

    const [content, setContent] = useState('');
    
    useEffect(() => {
        let articleContent = getCache('articleContent');
        setContent(articleContent.content);
    }, []);

    return (
        <div className="editor-browse" style={{ position: 'relative', marginTop: 60 }}>
            <Editor
                toolbar={{}}
                height="800px"
                preview={true}
                subfield={true}
                value={content}
            />
        </div>
    )
}

export default withRouter(article);