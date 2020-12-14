/*
 * @Author: mzl
 * @Date: 2020-11-23 21:15:45
 * @LastEditTime: 2020-12-06 16:52:58
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

// 允许携带cookie 后端session用到
axios.defaults.withCredentials=true;

// 拦截器
axios.interceptors.response.use(response => {
    let { status, data } = response;
    return {...data, status};
}, ({response}) => {
    let {status, data}  = response;
    return Promise.reject({status, ...data});
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
            resolve(res)
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
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// 前端session缓存
export const CacheConfig = {
    setCache: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    getCache: (key) => {
        return JSON.parse(window.localStorage.getItem(key));
    },
    delCache: () => {
        
    }
}