/*
 * @Author: your name
 * @Date: 2021-06-29 15:59:13
 * @LastEditTime: 2021-11-04 17:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/utils/request.js
 */
import axios from 'axios'

// 利用函数柯里化返回一个function
const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000,
  params: {
    icode: 'FBDC1D8AAB05D1E8'
  }
})

// 拦截响应
service.interceptors.response.use(response => {
  if (response.status === 200 && response.data) {
    return response.data
  } else {
    return Promise.reject(new Error('请求失败'))
  }
}, error => {
  return Promise.reject(error)
})

export default service
