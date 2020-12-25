/*
 * @Author: mzl
 * @Date: 2020-12-01 00:05:53
 * @LastEditTime: 2020-12-25 11:14:01
 * @Description: 操作文章表
 */

const mongoose = require('mongoose');
const articleSchema = require('../schemas/Article');

let Article = mongoose.model('Article', articleSchema);

let articleModel = {
    doSave: (params, callback) => {
        let article = new Article(params);
        article.save(err => callback(err));
    },
    // doDel: (params) => {
    //     console.log('文章删除');
    // },
    doFind: (params) => {
        return User.findOne(params);
    },
    doUpdate: (params) => {
        console.log('文章更新');
    }
};

module.exports = articleModel;