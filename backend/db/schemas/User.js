/*
 * @Author: mzl
 * @Date: 2020-11-30 23:49:37
 * @LastEditTime: 2020-12-01 23:17:50
 * @Description: User数据结构表
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = userSchema;

