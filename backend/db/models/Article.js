/*
 * @Author: mzl
 * @Date: 2020-12-01 00:05:53
 * @LastEditTime: 2021-02-01 17:19:39
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
    doFind: (params, callback) => {
        Article.find({}, (error, articles) => {
            callback(error, articles);
        });
    },
    doUpdate: (params) => {
        console.log('文章更新');
    }
};

module.exports = articleModel;