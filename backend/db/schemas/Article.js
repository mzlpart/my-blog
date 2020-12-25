/*
 * @Author: mzl
 * @Date: 2020-12-21 14:02:50
 * @LastEditTime: 2020-12-25 11:07:18
 * @LastEditors: mzl
 * @Description: 文章数据结构表
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    type: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
});

module.exports = articleSchema;