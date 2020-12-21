/*
 * @Author: mzl
 * @Date: 2020-12-21 14:02:50
 * @LastEditTime: 2020-12-21 14:03:22
 * @LastEditors: your name
 * @Description: 文章数据结构表
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = articleSchema;