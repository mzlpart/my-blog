/*
 * @Author: mzl
 * @Date: 2020-11-22 11:21:02
 * @LastEditTime: 2020-11-24 22:57:41
 * @LastEditors: Please set LastEditors
 * @Description: next拓展配置
 * @FilePath: \blog\next.config.js
 */

const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withLess, withCss], {
    cssModule: true,
    webpack: (config) => {
        return config
    },
});