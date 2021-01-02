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
  useEffect(async () => {
    let { categories, status } = await getAxios({ url: '/category/query' });
    if (status === 200) {
      setCategories(categories);
    }
  }, []);
  return categories;
}

export {
  useGetCategories,
}