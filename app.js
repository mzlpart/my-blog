/*
 * @Author: mzl
 * @Date: 2020-11-30 22:30:28
 * @LastEditTime: 2020-12-06 02:49:11
 * @Description: 程序入口
 */
const express = require("express");
const server = express();

const co = require("co");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let session = require("express-session");
let MongoStore = require("connect-mongo")(session);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRouter = require("./backend/routes");

const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/blog";

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
  console.log("正在连接数据库...");
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        console.log("数据库连接成功！");
        server.use(AllowCrossDomain);
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        // session一定要在路由前设置，否则无法生效
        server.use(
          session({
            name: "mzltest", //设置cookie的name，默认值是：connect.sid
            secret: "mzlvisa", //参与加密的字符串，又称签名
            cookie: {
              httpOnly: true, //开启后前端无法通过js操作cookie
              maxAge: 1000 * 30, //设置cookie的过期时间，单位毫秒
            },
            saveUninitialized: false, //是否在存储内容指点创建会话（存储为初始化的cookie）
            resave: false, //是否在每次请求时，强制重新保存session，即使他们没有变化
            store: new MongoStore({
              url: DB_URL, //session存储的数据库地址
              touchAfter: 24 * 3600, //修改频率（数据库存储的session的同步频率）
            }),
          })
        );
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
