/*
 * @Author: mzl
 * @Date: 2020-12-21 14:02:50
 * @LastEditTime: 2020-12-28 09:16:26
 * @LastEditors: mzl
 * @Description: 文章数据结构表
 * @param type 文章类型
 * @param description 描述
 * @param content 内容
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },    
    content: {
        type: String,
        require: true
    }
});

module.exports = articleSchema;