/*
 * @Author: mzl
 * @Date: 2020-12-25 10:55:41
 * @LastEditTime: 2020-12-25 10:56:30
 * @LastEditors: mzl
 * @Description: 文章类别路由
 */

const express = require("express");
const router = express.Router();

let categoryModel = require("../db/models/Category");

router.post('/category/add', async (req, res, next) => {
    let { name } = req.body;
    if(name) {
        categoryModel.doSave({name}, (err) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ msg: "添加成功!", name });
            }
        });
    } else {
        res.status(500).json({ msg: '类别名称不能为空！'})
    }
});

module.exports = router;

