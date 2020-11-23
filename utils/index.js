/*
 * @Author: mzl
 * @Date: 2020-11-23 21:15:45
 * @LastEditTime: 2020-11-23 23:08:08
 * @Description: 工具类
 */

/**
 * 时间戳转换
 */

import moment from 'moment';

export function timeFormat(timestamp) {
    return moment(timestamp).format("MMM Do YY");
}