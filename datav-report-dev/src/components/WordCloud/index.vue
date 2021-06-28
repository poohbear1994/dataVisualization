<!--
 * @Author: your name
 * @Date: 2021-06-28 16:27:16
 * @LastEditTime: 2021-06-28 19:27:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/components/WordCloud/index.vue
-->
<template>
  <ve-wordcloud
    :data="chartData"
    height="100%"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  name: 'WorldCloud',
  components: {

  },
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '噗噗熊',
          value: 80
        }, {
          name: '数据可视化',
          value: 50
        }, {
          name: 'ljx',
          value: 40
        }]
      },
      chartSettings: {}
    }
  },
  methods: {

  },
// 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.chartSettings = {
      color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)', 'rgba(255, 136, 35, .7)'],
      drawOutOfBound: true,
      type: 'diamond'
    }
  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */

</style>
