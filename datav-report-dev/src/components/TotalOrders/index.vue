<!--
 * @Author: your name
 * @Date: 2021-06-18 13:55:40
 * @LastEditTime: 2021-06-19 15:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TotalOrders/index.vue
-->
<template>
  <common-card title="累计订单" value="32,039,165">
    <template>
      <div id="total-orders-chart" :style="{width: '100%', height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">8,239,894</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'totalOrders',
  mixins: [commonCardMixin],
  data () {
    return {

    }
  },
// 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
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
        data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
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
    })
  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */

</style>
