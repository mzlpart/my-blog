/*
 * @Author: mzl
 * @Date: 2020-12-01 00:05:53
 * @LastEditTime: 2020-12-02 23:30:50
 * @Description: 操作User表
 */

const mongoose = require('mongoose');
const userSchema = require('../schemas/User');

let User = mongoose.model('User', userSchema);

let userModel = {
    doSave: (params, callback) => {
        let user = new User(params);
        user.save(err => callback(err));
    },
    doDel: (params) => {
        console.log('用户删除');
    },
    doFind: (params) => {
        console.log('用户查询');
    },
    doUpdate: (params) => {
        console.log('用户更新');
    }
};

module.exports = userModel;