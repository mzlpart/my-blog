/*
 * @Author: mzl
 * @Date: 2020-12-07 08:57:34
 * @LastEditTime: 2020-12-16 21:44:50
 * @Description: https://github.com/kkfor/for-editor
 */
import { useState, useEffect, useContext, useRef } from "react";
import { Select } from "antd";
import dynamic from "next/dynamic";
import "../styles/Editor.module.less";

const { Option } = Select;
const Editor = dynamic(import("for-editor"), { ssr: false });

export default (props) => {
  const [value, setValue] = useState("");

  function save(params) {
    console.log("mm-params", params);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="editor-container">
      <div className="article-type">
        <Select
          bordered={false}
          defaultValue="react"
          style={{ width: 120 }}
          onChange={handleChange}
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
        value={value}
        placeholder="可以预留一个模板位置在这里"
        onSave={(params) => save(params)}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};
