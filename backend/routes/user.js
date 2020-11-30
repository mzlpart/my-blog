/*
 * @Author: mzl
 * @Date: 2020-12-01 00:29:34
 * @LastEditTime: 2020-12-01 00:32:16
 * @Description: 用户路由
 */
const express = require('express');
const router = express.Router();

let userAction = require('../db/models/User');

router.use('/userAction', (req, res, next) => {
    userAction.doSave();
    res.status(200).json(data);
});

module.exports = router;