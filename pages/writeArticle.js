/*
 * @Author: mzl
 * @Date: 2020-12-07 08:57:34
 * @LastEditTime: 2020-12-07 08:57:34
 * @Description: 写文章 bytemd 插件
 */
import { useState, useEffect, useContext, useRef } from "react";
import { Editor, Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
const plugins = [
    gfm(),
    // Add more plugins here
];

export default (props) => {
    const [value, setValue] = useState('');
    return (
        <Editor
            value={value}
            plugins={plugins}
            onChange={(value) => {
                setValue(value);
            }}
        />
    );
}