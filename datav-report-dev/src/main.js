/*
 * @Author: your name
 * @Date: 2021-06-17 17:15:17
 * @LastEditTime: 2021-06-20 15:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'
// 全局引入echarts
import * as Echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './style/index.css'

Vue.config.productionTip = false

// 将echarts挂载到原型上，方便全局调用
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
