<!--
 * @Author: your name
 * @Date: 2021-06-17 20:54:17
 * @LastEditTime: 2021-06-20 15:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TopView/index.vue
-->
<template>
  <div>
    <v-chart class="echarts" :options="data"></v-chart>
    <ve-line :data="velineData"/>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'salesView',
  components: {

  },
  data () {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{
          type: 'line',
          data: [100, 200, 300]
        }]
      },
      velineData: {
        columns: ['日期', '销售额'],
        rows: [{
          '日期': '1月1日', '销售额': 123
        }, {
          '日期': '1月2日', '销售额': 23
        }, {
          '日期': '1月3日', '销售额': 323
        }, {
          '日期': '1月4日', '销售额': 193
        }, {
          '日期': '1月5日', '销售额': 523
        }]
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
.echarts {
  // width: 100%;
  // height: 100%;
  width: 800px;
  height: 400px;
}
</style>
