/*
 * @Author: mzl
 * @Date: 2020-11-30 22:30:28
 * @LastEditTime: 2020-12-02 23:59:13
 * @Description: 程序入口
 */
const express = require("express");
const server = express();

const co = require("co");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRouter = require("./backend/routes");

const PORT = 3000;
//自定义中间件，设置跨域需要的响应头。
const AllowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
};

co(function* () {
  yield app.prepare();
  console.log('正在连接数据库...');
  mongoose
    .connect("mongodb://localhost:27017/blog", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(
      () => {
        console.log('数据库连接成功！');
        server.use(AllowCrossDomain);
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use("/api", apiRouter);
        server.get("*", (req, res) => {
          return handle(req, res);
        });
        server.listen(PORT);
        console.log(`Listening on ${PORT},open: 127.0.0.1:${PORT}`);
      },
      (err) => console.log(err)
    );
}).catch((error) => console.error(error.stack));
