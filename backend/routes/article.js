/*
 * @Author: mzl
 * @Date: 2020-12-25 10:55:41
 * @LastEditTime: 2021-02-02 10:37:08
 * @LastEditors: mzl
 * @Description: 文章路由
 */

const express = require("express");
const router = express.Router();

let articleModel = require("../db/models/Article");

router.post('/article/add', (req, res, next) => {
    let { username, type, content, description, title } = req.body;
    let time = new Date().getTime(); // 当前时间
    if(username === 'mzl') {
        articleModel.doSave({type, description, content, time, title}, (err) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ msg: "发布成功!" });
            }
        });
    } else {
        res.status(500).json({ msg: '你谁啊你，就来发布文章！'})
    }
});

router.get('/article/list', (req, res, next) => {
    articleModel.doFind(null, (err, list) => {
        if (err) {
            res.status(500).json({ msg: err})
        } else {
            res.json({ msg: "查询成功!", list });
        }
    });
});

module.exports = router;