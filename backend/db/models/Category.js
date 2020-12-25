/*
 * @Author: mzl
 * @Date: 2020-12-01 00:05:53
 * @LastEditTime: 2020-12-25 10:54:58
 * @Description: 操作Category表
 */

const mongoose = require('mongoose');
const categorySchema = require('../schemas/Category');

let Category = mongoose.model('Category', categorySchema);

let categoryModel = {
    doSave: (params, callback) => {
        let category = new Category(params);
        category.save(err => callback(err));
    },
    doDel: (params) => {
        console.log('类别删除');
    },
    doFind: (params) => {
        return Category.findOne(params);
    },
    doUpdate: (params) => {
        console.log('类别更新');
    }
};

module.exports = categoryModel;