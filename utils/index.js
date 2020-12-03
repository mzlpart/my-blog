/*
 * @Author: mzl
 * @Date: 2020-11-23 21:15:45
 * @LastEditTime: 2020-11-23 23:08:08
 * @Description: 工具类
 */

import moment from 'moment';
import axios from 'axios';


/**
 * 时间戳转换
 */
export function timeFormat(timestamp) {
    return moment(timestamp).format("MMM Do YY");
}


// axios设置
let baseURL = '';
if( process.env.NODE_ENV === 'production' ) {
    baseURL = '上线的地址';
} else {
    baseURL = 'http://localhost:3000/api';
}

// 拦截器
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/vnd.dpexpo.v1+json';
    config.baseURL = baseURL;
    config.timeout = 10000;
    return config;
}, (error) => {
    return Promise.reject(error)
})

// axios的get请求
export function getAxios({
    url,
    params={}
}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

// axios的post请求
export function postAxios({
    url,
    data
}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}