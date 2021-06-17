/*
 * @Author: your name
 * @Date: 2021-06-17 17:15:17
 * @LastEditTime: 2021-06-17 17:18:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}]

const router = new VueRouter({
  routes
})

export default router
