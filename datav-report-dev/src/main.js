/*
 * @Author: your name
 * @Date: 2021-06-17 17:15:17
 * @LastEditTime: 2021-06-17 20:43:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 全局引入echarts
import Echarts from 'echarts'
Vue.config.productionTip = false
// 将echarts挂载到原型上，方便全局调用
Vue.prototype.$echarts = Echarts
console.log(Echarts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
