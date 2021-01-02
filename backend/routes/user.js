/*
 * @Author: mzl
 * @Date: 2020-12-01 00:29:34
 * @LastEditTime: 2020-12-06 16:36:45
 * @Description: 用户路由
 */
const express = require("express");
const router = express.Router();

let userModel = require("../db/models/User");

router.post("/user/login", async (req, res, next) => {
  let { username, password } = req.body;
  if(req.session.userinfo) {
    res.json({ msg: "登录成功", username });
    return;
  }
  let dbUser = await userModel.doFind({ username, password });
  if (dbUser && dbUser.username === 'mzl' && dbUser.password === '111qqq') {
    req.session.userinfo = dbUser.username;
    res.json({ msg: "登录成功", username });
  } else {
    res.status(500).json({ msg: "登录失败, 用户名密码错误！" });
  }
});

module.exports = router;
