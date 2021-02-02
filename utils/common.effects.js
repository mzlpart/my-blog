/*
 * @Author: mzl
 * @Date: 2021-1-1 19:39
 * @LastEditTime: 2021-02-01 16:44:29
 * @LastEditors: mzl
 * @Description: 公共effects
 */

import { useState, useEffect, useContext, useRef } from "react";
import { getAxios } from './index';
import { UserContext } from '../pages/_app';

function useGetCategories() {
  let { state } = useContext(UserContext);
  let [categories, setCategories] = useState([]); // 类别列表
  useEffect(async () => {
    let { categories, status } = await getAxios({ url: '/category/query' });
    if (status === 200) {
      setCategories(categories);
    }
  }, [state.articleReducer.isFetch]);
  return categories;
}

export {
  useGetCategories,
}