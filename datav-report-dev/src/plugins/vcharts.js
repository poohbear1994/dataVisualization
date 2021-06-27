/*
 * @Author: your name
 * @Date: 2021-06-20 15:17:43
 * @LastEditTime: 2021-06-27 16:26:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/plugins/vcharts.js
 */
import Vue from 'vue'
// 引入需要用到的绘图组件
import VELine from 'v-charts/lib/line'
import VEBmap from 'v-charts/lib/bmap'
// 引入样式文件
import 'v-charts/lib/style.css'

// 如果你不想要按需加载，可以用这种方式全部引入
// import VCharts from 'v-charts'

// Vue.use(VCharts)

Vue.component('ve-line', VELine)
Vue.component('ve-bmap', VEBmap)
