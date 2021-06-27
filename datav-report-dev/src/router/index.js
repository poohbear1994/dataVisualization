/*
 * @Author: your name
 * @Date: 2021-06-17 17:15:17
 * @LastEditTime: 2021-06-27 14:44:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap.vue'
import BMap2 from '../views/BMap2.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/bmap',
  name: 'BMap',
  component: BMap
}, {
  path: '/bmap2',
  name: 'BMap2',
  component: BMap2
}]

const router = new VueRouter({
  routes
})

export default router
