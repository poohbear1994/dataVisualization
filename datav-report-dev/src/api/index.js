/*
 * @Author: your name
 * @Date: 2021-06-29 16:03:47
 * @LastEditTime: 2021-07-18 08:37:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/api/index.js
 */
import request from '../utils/request2'

/**
 * @description: 获取词云数据
 * @param {*}
 * @return {*}
 */
export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get'
  })
}

/**
 * @description: 获取地图散点数据
 * @param {*}
 * @return {*}
 */
export function mapScatter () {
  return request({
    url: '/screen/map/scatter',
    method: 'get'
  })
}

/**
 * @description: 获取数据报表数据
 * @param {*}
 * @return {*}
 */
export function reportData () {
  return request({
    url: '/screen/data',
    method: 'get'
  })
}
