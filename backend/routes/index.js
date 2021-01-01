/*
 * @Author: mzl
 * @Date: 2020-11-30 20:47:58
 * @LastEditTime: 2020-12-01 22:52:17
 * @Description: 后端路由
 */
const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const categoryRouter = require('./category');

router.use(userRouter);
router.use(categoryRouter);

module.exports = router;