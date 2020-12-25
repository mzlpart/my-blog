/*
 * @Author: mzl
 * @Date: 2020-12-25 10:55:41
 * @LastEditTime: 2020-12-25 11:14:40
 * @LastEditors: mzl
 * @Description: 文章路由
 */

const express = require("express");
const router = express.Router();

let articleModel = require("../db/models/Article");

