<!--
 * @Author: your name
 * @Date: 2021-06-18 13:55:40
 * @LastEditTime: 2021-06-29 19:47:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TotalOrders/index.vue
-->
<template>
  <common-card title="累计订单" :value="orderToday">
    <template>
      <v-chart :options="getOptions()"></v-chart>
      <div id="total-orders-chart" :style="{width: '100%', height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">{{orderLastDay}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  name: 'totalOrders',
  mixins: [commonCardMixin, commonDataMixin],
  data () {
    return {

    }
  },
  methods: {
    getOptions () {
      return this.orderTrend.length > 0
      ? {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: true
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: this.orderTrend,
          // 设置折线面积
          areaStyle: {
            color: 'purple'
          },
          // 隐藏线
          lineStyle: {
            width: 0
          },
          // 折线变化平滑化
          smooth: true,
          // 隐藏转折点
          itemStyle: {
            opacity: 0
          }
        }],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      }
      : null
    }
  },
// 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */

</style>
