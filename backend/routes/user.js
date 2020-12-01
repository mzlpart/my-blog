/*
 * @Author: mzl
 * @Date: 2020-12-01 00:29:34
 * @LastEditTime: 2020-12-02 00:24:20
 * @Description: 用户路由
 */
const express = require("express");
const router = express.Router();

let userAction = require("../db/models/User");

// TODO: 重构，并添加redux router.post, get, delete, put

const UserAct = {
    save: params => userAction.doSave(params),
    delete: params => userAction.doDel(params),
    find: params => userAction.doFind(params),
    update: params => userAction.doUpdate(params)
}

router.use("/user", (req, res, next) => {
  let { username, password, type } = req.body;
  UserAct[type]({username, password});
});

module.exports = router;
