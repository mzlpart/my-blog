/*
 * @Author: mzl
 * @Date: 2021-1-1 19:39
 * @LastEditTime: 2021-1-1 19:39
 * @LastEditors: mzl
 * @Description: 公共effects
 */
 
import { useState, useEffect, useContext, useRef } from "react";
import { getAxios } from './index';

function useGetCategories(list = []) {
    let [categories, setCategories] = useState(list); // 类别列表
    useEffect(() => {
        getAxios({url: '/category/query'})
        .then(res => {
          let { categories, status } = res;
          if(status === 200) {
            setCategories(categories);
          }
        })
        .catch(error => {
          console.log('mzl', error)
        });
      }, []);
    return [categories, setCategories];
}

export {
    useGetCategories,
}