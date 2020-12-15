/*
 * @Author: mzl
 * @Date: 2020-12-07 08:57:34
 * @LastEditTime: 2020-12-07 08:57:34
 * @Description: https://github.com/kkfor/for-editor
 */
import { useState, useEffect, useContext, useRef } from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(import('for-editor'), { ssr: false });

export default (props) => {
    const [value, setValue] = useState('');

    function save(params) {
        console.log('mm-params', params)
    }

    return (
        <div className="editor-style" style={{ marginTop: 60 }}>
            <Editor
                height="800px"
                preview={true}
                subfield={true}
                value={value}
                placeholder="可以预留一个模板位置在这里"
                onSave={params => save(params)}
                onChange={value => setValue(value)} />
        </div>
    );
}