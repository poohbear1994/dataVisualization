<!--
 * @Author: your name
 * @Date: 2021-06-18 13:55:40
 * @LastEditTime: 2021-06-29 19:24:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TotalOrders/index.vue
-->
<template>
  <common-card title="今日交易用户" :value="`${userToday}`">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退单率 </span>
      <span class="emphasis">{{returnRate}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  name: 'todayUsers',
  mixins: [commonCardMixin, commonDataMixin],
  data () {
    return {

    }
  },
  methods: {
    getOptions () {
      return {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,
          data: this.orderUserTrendAxis
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '用户实时交易订单量',
          type: 'bar',
          data: this.orderUserTrend,
          barWidth: '60%'
        }],
        tooltip: {},
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      }
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
