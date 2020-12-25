/*
 * @Author: mzl
 * @Date: 2020-12-25 10:44:05
 * @LastEditTime: 2020-12-25 10:46:02
 * @LastEditors: mzl
 * @Description: 文章类别
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = categorySchema;
