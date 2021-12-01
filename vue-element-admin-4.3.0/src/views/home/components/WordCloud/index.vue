<!--
 * @Author: your name
 * @Date: 2021-06-28 16:27:16
 * @LastEditTime: 2021-07-18 08:31:32
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
import commonDataMixin from '../../mixins/commonDataMixin.js'
export default {
  name: 'WorldCloud',
  components: {

  },
  mixins: [commonDataMixin],
  data() {
    return {
      chartData: {},
      chartSettings: {}
    }
  },
  watch: {
    wordCloudData() {
      const data = []
      this.wordCloudData.forEach(item => {
        data.push({
          name: item.word,
          value: item.count
        })
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  },
// 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.chartSettings = {
      color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)', 'rgba(255, 136, 35, .7)'],
      drawOutOfBound: true,
      type: 'diamond'
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */

</style>
