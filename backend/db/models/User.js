/*
 * @Author: mzl
 * @Date: 2020-12-01 00:05:53
 * @LastEditTime: 2020-12-02 00:22:41
 * @Description: 操作User表
 */

const mongoose = require('mongoose');
const userSchema = require('../schemas/User');

let User = mongoose.model('User', userSchema);

let userAction = {
    doSave: (params) => {
        let user = new User(params);
        user.save(err => {
            if (err) {
                console.log(err);
            } else {
                // 返回给前台数据
                console.log('保存成功');
            }
        });
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