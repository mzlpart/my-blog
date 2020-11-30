/*
 * @Author: mzl
 * @Date: 2020-12-01 00:05:53
 * @LastEditTime: 2020-12-01 00:32:01
 * @Description: 操作User表
 */

const mongoose = require('mongoose');
const userSchema = require('../schemas/User');

let User = mongoose.model('User', userSchema);

let userAction = {
    doSave: (params) => {
        console.log('用户保存');
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

module.exports = userAction;