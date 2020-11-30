/*
 * @Author: mzl
 * @Date: 2020-11-30 20:47:58
 * @LastEditTime: 2020-11-30 22:51:32
 * @Description: 后端路由
 */
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('this is a api request!');
    next();
});

router.use('/testApi', (req, res, next) => {
    const data = [
        {
            name: '牟振来',
            age: 30
        },
        {
            name: '张辉茹',
            age: 30
        }
    ]
    res.status(200).json(data);
});

module.exports = router;