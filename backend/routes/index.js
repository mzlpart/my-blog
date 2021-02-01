/*
 * @Author: mzl
 * @Date: 2020-11-30 20:47:58
 * @LastEditTime: 2021-02-01 14:22:33
 * @Description: 后端路由
 */
const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const categoryRouter = require('./category');
const articleRouter = require('./article');

router.use(userRouter);
router.use(categoryRouter);
router.use(articleRouter);

module.exports = router;