<!--
 * @Author: your name
 * @Date: 2021-06-18 13:55:40
 * @LastEditTime: 2021-06-19 15:48:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TotalOrders/index.vue
-->
<template>
  <common-card title="总计销售额" value="¥ 32,039,165">
    <template>
      <div id='today-users-chart' :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>退单率 </span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'todayUsers',
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
    const chartDOm = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDOm)
    chart.setOption({
      color: ['#3398DB'],
      xAxis: {
        type: 'category',
        show: false,
        data: ['00:01', '00:02', '00:03', '00:04', '00:05', '00:06', '00:07', '00:08', '00:09', '00:10', '00:11', '00:12', '00:13', '00:14']
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'bar',
        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
        barWidth: '60%'
      }],
      tooltip: true,
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
