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

