/*
 * @Author: mzl
 * @Date: 2020-12-01 00:29:34
 * @LastEditTime: 2020-12-01 22:55:43
 * @Description: 用户路由
 */
const express = require('express');
const router = express.Router();

let userAction = require('../db/models/User');

router.use('/user', (req, res, next) => {
    userAction.doSave();
});

module.exports = router;