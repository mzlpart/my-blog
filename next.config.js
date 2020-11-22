/*
 * @Author: next拓展配置
 * @Date: 2020-11-22 11:21:02
 * @LastEditTime: 2020-11-22 12:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\next.config.js
 */

 
const withCss = require('@zeit/next-css');

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({
    // cssModules: true,
    // lessLoaderOptions: {
    //     javascriptEnabled: true
    //  }
})