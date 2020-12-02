/*
 * @Author: mzl
 * @Date: 2020-12-01 00:29:34
 * @LastEditTime: 2020-12-03 00:02:21
 * @Description: 用户路由
 */
const express = require("express");
const router = express.Router();

let userModel = require("../db/models/User");

router.post("/user/save", (req, res, next) => {
  let { username, password } = req.body;
  if (username != "" && password != "") {
    userModel.doSave({ username, password }, (err) => {
      if (err) {
        res.json({ status: 500, data: '请求失败', err})
      } else {
        res.json({ status: 200, data: '请求成功'})
      }
    });
  }
});

module.exports = router;
